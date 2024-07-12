{
    "targets":[
        {
            "target_name": "json_parse",
            "sources": [ "src/json_parse.cc", "src/yyjson.c"],
            # "include_dirs": [
            #     "<!@(node -p \"require('node-addon-api').include\")"
            # ],
            # "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"],
            # "xcode_settings": {
            #     "GCC_ENABLE_CPP_EXCEPTIONS": "YES"
            # },
            # "configurations": {
            #     "Release": {
            #     "msvs_settings": {
            #         "VCCLCompilerTool": {
            #         "ExceptionHandling": 1
            #         }
            #     }
            #     }
            # }
        }
    ]
}
