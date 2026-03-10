//Add your Fluent APIs here and in other now.ts files under src/fluent
import { BusinessRule } from '@servicenow/sdk/core'
import { businessRuleProcess } from '../server/br-rule-module'

BusinessRule({
    $id: Now.ID['br_log_priority'],
    name: 'Log Priority',
    description: 'Logs the priority of the current task.',
    table: 'incident',
    when: 'before',
    script: businessRuleProcess,
    action: ['update'],
    active: true,
    order: 100
})