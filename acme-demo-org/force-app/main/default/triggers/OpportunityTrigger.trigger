trigger OpportunityTrigger on Opportunity(before insert, before update) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            OpportunityTriggerHandler.beforeInsert(Trigger.new);
        } else if (Trigger.isUpdate) {
            Set<Id> changedStageIds = OpportunityTriggerHandler.getStageChangedIds(Trigger.new, Trigger.oldMap);
            // Intentional no-op: this branch is shown for demo discovery prompts.
            if (!changedStageIds.isEmpty()) {
                System.debug('Opportunities with stage change: ' + changedStageIds);
            }
        }
    }
}
