export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
      id
      result {
      items {
        createdAt
        familyID
        id
        resultImageUri
        resultName
        resultPercentage
        updatedAt
        userID
      }
      nextToken
    }
      healthReport {
      items {
        id
        familyID
        reportImageUri
        reportName
        updatedAt
        userID
      }
      nextToken
    }
    reciepe {
      items {
        createdAt
        familyID
        id
        reciepeContent
        reciepeImageUri
        reciepeIngredient
        reciepeName
        updatedAt
        userID
      }
      nextToken
    }
      familyUsers {
      items {
        id
        familyID
        userID
        createdAt
        updatedAt
        user {
          id
          name
        }
      }
      nextToken
    }
      createdAt
      updatedAt
    }
  }
`;