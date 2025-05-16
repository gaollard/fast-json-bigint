#include <napi.h>
#include "yyjson.h"
#include <fstream>
#include <iostream>
#include <ctime>
#include <sys/timeb.h>
#include <string>
#include <sstream>

namespace yy_parser
{

using namespace Napi;

Napi::Value Method(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  if (info.Length() < 1) {
    Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
    return env.Null();
  }

  if (!info[0].IsString()) {
    Napi::TypeError::New(env, "Argument must be a string").ThrowAsJavaScriptException();
    return env.Null();
  }

  std::string content = info[0].As<Napi::String>().Utf8Value();
  const char* str_buf = content.c_str();
  
  yyjson_read_err err;
  yyjson_read_flag flag = 0;
  flag &= ~YYJSON_READ_INSITU;
  yyjson_doc* doc = yyjson_read_opts((char*)(void*)(size_t)(const void*)str_buf, strlen(str_buf), flag, NULL, &err);

  if (!doc) {
    std::stringstream msg;
    msg << "Unexpected token in JSON at position " << err.pos;
    Napi::Error::New(env, msg.str()).ThrowAsJavaScriptException();
    return env.Null();
  }

  const char *json = yyjson_write(doc, 0, NULL);
  Napi::Value result = String::New(env, json);
  yyjson_doc_free(doc);
  free((void *)json);
  return result;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set("parse", Napi::Function::New(env, Method));
  return exports;
}

NODE_API_MODULE(yy_parser, Init)

} // namespace yy_parser