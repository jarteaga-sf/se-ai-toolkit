public with sharing class OpportunityTriggerHandler {
    /**
     * Applies a lightweight default stage for demo records.
     * Uses a single loop and no SOQL/DML in-loop for governor safety.
     */
    public static void beforeInsert(List<Opportunity> newRecords) {
        if (newRecords == null || newRecords.isEmpty()) {
            return;
        }

        for (Opportunity opp : newRecords) {
            if (String.isBlank(opp.StageName)) {
                opp.StageName = 'Prospecting';
            }
            if (opp.CloseDate == null) {
                opp.CloseDate = Date.today().addDays(30);
            }
        }
    }

    /**
     * Detects stage changes for later extension points.
     */
    public static Set<Id> getStageChangedIds(List<Opportunity> newRecords, Map<Id, Opportunity> oldMap) {
        Set<Id> changedIds = new Set<Id>();
        if (newRecords == null || newRecords.isEmpty() || oldMap == null) {
            return changedIds;
        }

        for (Opportunity opp : newRecords) {
            Opportunity oldOpp = oldMap.get(opp.Id);
            if (oldOpp != null && oldOpp.StageName != opp.StageName) {
                changedIds.add(opp.Id);
            }
        }
        return changedIds;
    }
}
