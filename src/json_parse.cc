#include <node.h>
#include "yyjson.h"
#include <fstream>
#include <iostream>
#include <ctime>
#include <sys/timeb.h>
#include <string>
#include <sstream>

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
    yyjson_read_err err;
    yyjson_read_flag flag = 0;
    flag &= ~YYJSON_READ_INSITU;
    yyjson_doc *doc = yyjson_read_opts((char *)(void *)(size_t)(const void *)str_buf, strlen(str_buf), flag, NULL, &err);

    if (!doc)
    {
      const char *prefix = "Unexpected token in JSON at position ";
      std::stringstream msg;
      msg << prefix << err.pos;
      isolate->ThrowException(v8::Exception::Error(
          v8::String::NewFromUtf8(isolate, msg.str().c_str()).ToLocalChecked()));
      yyjson_doc_free(doc);
      return;
    }

    const char *json = yyjson_write(doc, 0, NULL);

    args.GetReturnValue().Set(
      String::NewFromUtf8(isolate, json).ToLocalChecked()
    );

    yyjson_doc_free(doc);
    free((void *)json);
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