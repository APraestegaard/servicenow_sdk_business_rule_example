//Add your Fluent APIs here and in other now.ts files under src/fluent
import { BusinessRule } from '@servicenow/sdk/core'
import { businessRuleProcess } from '../server/br-rule-module'

BusinessRule({
    $id: Now.ID['br_log_priority'],
    name: 'APR Log Priority',
    description: 'Logs the priority of the current task.',
    table: 'incident',
    filter_condition: 'priorityVALCHANGES^ORassigned_toVALCHANGES^EQ',
    when: 'before',
    script: businessRuleProcess,
    add_message: true,
    message: 'The priority or assigned to of this incident has changed..',
    action: ['update'],
    active: true,
    order: 100
})