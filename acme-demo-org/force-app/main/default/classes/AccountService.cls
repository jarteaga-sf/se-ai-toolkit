public with sharing class AccountService {
    /**
     * Returns active contacts for an account.
     * Keeps logic centralized so LWC and Apex callers reuse one pattern.
     */
    @AuraEnabled(cacheable=true)
    public static List<Contact> getActiveContacts(Id accountId) {
        if (accountId == null) {
            return new List<Contact>();
        }

        return [
            SELECT Id, Name, Email, AccountId, Account.Name
            FROM Contact
            WHERE AccountId = :accountId
            AND IsDeleted = false
            ORDER BY LastModifiedDate DESC
            LIMIT 100
            WITH USER_MODE
        ];
    }

    /**
     * Quick summary helper for demo chat prompts.
     */
    public static String getSummary(Id accountId) {
        Integer contactCount = getActiveContacts(accountId).size();
        return 'Active contacts found: ' + String.valueOf(contactCount);
    }
}
