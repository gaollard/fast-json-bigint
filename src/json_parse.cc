#include <node.h>
#include "yyjson.h"
#include <fstream>
#include <iostream>
#include <ctime>
#include <sys/timeb.h>
#include <string>

namespace yy_parser
{

  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;

  void Method(const FunctionCallbackInfo<Value> &args)
  {
    Isolate *isolate = args.GetIsolate();

    std::string content = std::string(*String::Utf8Value(isolate, args[0]));

    const char *str_buf = content.c_str();
    yyjson_doc *doc = yyjson_read(str_buf, strlen(str_buf), 0);
    // yyjson_val *obj = yyjson_doc_get_root(doc);

    if (!doc)
    {
      isolate->ThrowException(v8::Exception::Error(
          v8::String::NewFromUtf8(isolate, "Unexpected end of JSON input").ToLocalChecked()));
      return;
    }

    const char *json = yyjson_write(doc, 0, NULL);

    args.GetReturnValue().Set(
      String::NewFromUtf8(isolate, json).ToLocalChecked()
    );
    return;

    if (!json)
    {
      isolate->ThrowException(v8::Exception::Error(
          v8::String::NewFromUtf8(isolate, "Unexpected end of JSON input").ToLocalChecked()));
      return;
    }

    v8::Local<v8::Value> parsedObject;
    if (
        !v8::JSON::Parse(
             isolate->GetCurrentContext(),
             v8::String::NewFromUtf8(isolate, json, v8::NewStringType::kNormal).ToLocalChecked())
             .ToLocal(&parsedObject))
    {
      isolate->ThrowException(v8::Exception::Error(
          v8::String::NewFromUtf8(isolate, "Failed to parse JSON").ToLocalChecked()));
      return;
    }

    args.GetReturnValue().Set(parsedObject);

    free((void *)json);
  }

  void Initialize(Local<Object> exports)
  {
    NODE_SET_METHOD(exports, "parse", Method);
  }

  NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

} // namespace yy_parser