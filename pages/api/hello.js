// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
  "data": [
    {
      "matterId": 13,
      "groupId": 1,
      "groupName": "Social Security Income",
      "justificationComments": "This is a social security income",
      "clarificationComments": "What is group is all about?",
      "justificationStatus": "OperationJustified|PendingForReview|Justified|Unjustified|NotApplicable|SentForClarification",
      "inventoryId": 10,
      "inventoryName": "Accord 1244",
      "transactions": [
        {
          "matterId": 13,
          "id": 650,
          "isFavorite": true,
          "nameofInstitution": "BOA",
          "accountNo": "0002 3345 1234",
          "transactionDate": "2022-06-21T08:24:07.8310826",
          "transactionNumber": "654123499",
          "description": "Check #809",
          "withdrawalOrDeposit": "Withdrawal|Deposit",
          "transactionType": "Withdrawal|Deposit|Check|Cash|ATM|Online",
          "amount": 5263.26,
          "url": "https://igniteipa.sharepoint.com/sites/Docs/Shared Documents/General_New/01-Clients/Shivers Law Group/08-Project, POC/05-Develop/Matters/F1234-G. Balagopalan/G. Balagopalan/Asset/Jeep/Title.pdf",
          "pageNo": 10,
          "justificationStatus": "OperationJustified|PendingForReview|Justified|Unjustified|NotApplicable|SentForClarification"
        },
        {
          "matterId": 13,
          "id": 651,
          "isFavorite": false,
          "nameofInstitution": "BOA",
          "accountNo": "0002 3345 1222",
          "transactionDate": "2022-06-21T08:24:07.8310826",
          "transactionNumber": "65412223499",
          "description": "ATM deposit",
          "withdrawalOrDeposit": "Withdrawal|Deposit",
          "transactionType": "Withdrawal|Deposit|Check|Cash|ATM|Online",
          "amount": 63.26,
          "url": "https://igniteipa.sharepoint.com/sites/Docs/Shared Documents/General_New/01-Clients/Shivers Law Group/08-Project, POC/05-Develop/Matters/F1234-G. Balagopalan/G. Balagopalan/Asset/Jeep/Title.pdf",
          "pageNo": 12,
          "justificationStatus": "OperationJustified|PendingForReview|Justified|Unjustified|NotApplicable|SentForClarification"
        }
      ]
    },
    {
      "matterId": 13,
      "groupId": 0,
      "groupName": null,
      "justificationComments": "",
      "clarificationComments": "",
      "justificationStatus": "Unjustified",
      "inventoryId": null,
      "inventoryName": null,
      "transactions": [
        {
          "matterId": 13,
          "id": 650,
          "isFavorite": true,
          "nameofInstitution": "BOA",
          "accountNo": "0002 3345 1234",
          "transactionDate": "2022-06-21T08:24:07.8310826",
          "transactionNumber": "654123499",
          "description": "Check #809",
          "withdrawalOrDeposit": "Withdrawal|Deposit",
          "transactionType": "Withdrawal|Deposit|Check|Cash|ATM|Online",
          "amount": 5263.26,
          "url": "https://igniteipa.sharepoint.com/sites/Docs/Shared Documents/General_New/01-Clients/Shivers Law Group/08-Project, POC/05-Develop/Matters/F1234-G. Balagopalan/G. Balagopalan/Asset/Jeep/Title.pdf",
          "pageNo": 10,
          "justificationStatus": "Unjustified"
        },
        {
          "matterId": 13,
          "id": 651,
          "isFavorite": false,
          "nameofInstitution": "BOA",
          "accountNo": "0002 3345 1222",
          "transactionDate": "2022-06-21T08:24:07.8310826",
          "transactionNumber": "65412223499",
          "description": "ATM deposit",
          "withdrawalOrDeposit": "Withdrawal|Deposit",
          "transactionType": "Withdrawal|Deposit|Check|Cash|ATM|Online",
          "amount": 63.26,
          "url": "https://igniteipa.sharepoint.com/sites/Docs/Shared Documents/General_New/01-Clients/Shivers Law Group/08-Project, POC/05-Develop/Matters/F1234-G. Balagopalan/G. Balagopalan/Asset/Jeep/Title.pdf",
          "pageNo": 12,
          "justificationStatus": "Unjustified"
        }
      ]
    }
  ]
})
}
