import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '98db03c38626425693bf3f75c89ee1f0'
                    }
                    br_log_priority: {
                        table: 'sys_script'
                        id: 'f50f97dfe2a14ff8a1d8c035165ffec7'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e155b79c637b40188565373bcdb32295'
                    }
                    'src_server_br-rule-module_ts': {
                        table: 'sys_module'
                        id: '6135883e375a4b2284a20571d2a36f3e'
                    }
                }
            }
        }
    }
}
