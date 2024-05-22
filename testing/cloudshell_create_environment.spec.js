const check = ($) => {
  if (
    $.eventSource == "cloudshell.amazonaws.com" &&
    $.eventName == "CreateEnvironment"
  ) {
    return {
      output: "A new CloudShell Console has been launched",
    };
  }
};

describe("CloudShell Create Environment detection", function () {
  context("when a CreateEnvironment event was received", function () {
    it("returns only the output", function () {
      const result = check(createEnvironmentEvent);

      expect(result)
        .to.have.property("output")
        .equal("A new CloudShell Console has been launched");
      expect(result).to.not.have.property("resourceID");
    });
  });

  context("when other event was received", function () {
    it("does not return anything", function () {
      const result = check(createTrailEvent);

      expect(result).to.not.exist;
    });
  });
});

const createEnvironmentEvent = {
  additionalEventData: null,
  awsRegion: "eu-west-1",
  eventCategory: "Management",
  eventID: "8b3cabc4-47d7-47d9-8e3a-eb1760820f90",
  eventName: "CreateEnvironment",
  eventSource: "cloudshell.amazonaws.com",
  eventTime: "2024-05-22T13:19:35Z",
  eventType: "AwsApiCall",
  eventVersion: "1.09",
  managementEvent: true,
  readOnly: false,
  recipientAccountID: "710427457664",
  requestID: "f349a7dd-3036-4323-867e-29142fdbf4bd",
  requestParameters: null,
  responseElements: {
    EnvironmentId: "d151c876-1809-461d-88ba-7a02054fb460",
    StartScreenMessages: [],
    Status: "CREATING",
  },
  sourceIPAddress: "86.127.233.92",
  tlsDetails: {
    cipherSuite: "",
    clientProvidedHostHeader: "",
    tlsVersion: "",
  },
  userAgent:
    "Mozilla/5.0 (X11; Linux x86_64; rv:126.0) Gecko/20100101 Firefox/126.0",
  userIdentity: {
    accessKeyId: "ASIA2K2GGXCAESFPGMZ7",
    accountId: "710427457664",
    arn: "arn:aws:iam::710427457664:user/nestor.salceda",
    principalId: "AIDA2K2GGXCAFHMIADICN",
    type: "IAMUser",
    userName: "nestor.salceda",
  },
};

const createTrailEvent = {
  additionalEventData: null,
  awsRegion: "eu-west-1",
  eventCategory: "Management",
  eventID: "9576289e-593b-457b-9638-56e7ca0b604f",
  eventName: "CreateTrail",
  eventSource: "cloudtrail.amazonaws.com",
  eventTime: "2023-12-08T08:51:33Z",
  eventType: "AwsApiCall",
  eventVersion: "1.09",
  managementEvent: true,
  readOnly: false,
  recipientAccountID: "710427457664",
  requestID: "cf708187-210b-49ef-a0e5-ad36d645e7db",
  requestParameters: {
    enableLogFileValidation: true,
    includeGlobalServiceEvents: true,
    isMultiRegionTrail: true,
    isOrganizationTrail: false,
    kmsKeyId:
      "arn:aws:kms:eu-west-1:710427457664:key/ef6910bc-6b9e-4a10-90ef-25c908dbe79b",
    name: "trail-for-testing",
    s3BucketName: "aws-cloudtrail-logs-710427457664-87107d03",
    s3KeyPrefix: "",
  },
  responseElements: {
    includeGlobalServiceEvents: true,
    isMultiRegionTrail: true,
    isOrganizationTrail: false,
    kmsKeyId:
      "arn:aws:kms:eu-west-1:710427457664:key/ef6910bc-6b9e-4a10-90ef-25c908dbe79b",
    logFileValidationEnabled: true,
    name: "trail-for-testing",
    s3BucketName: "aws-cloudtrail-logs-710427457664-87107d03",
    s3KeyPrefix: "",
    trailARN:
      "arn:aws:cloudtrail:eu-west-1:710427457664:trail/trail-for-testing",
  },
  sourceIPAddress: "37.29.170.68",
  tlsDetails: {
    cipherSuite: "",
    clientProvidedHostHeader: "",
    tlsVersion: "",
  },
  userAgent: "AWS Internal",
  userIdentity: {
    accessKeyID: "ASIA2K2GGXCANG3DL3LY",
    accountID: "710427457664",
    arn: "arn:aws:iam::710427457664:user/nestor.salceda",
    principalID: "AIDA2K2GGXCAFHMIADICN",
    type: "IAMUser",
    userName: "nestor.salceda",
  },
};
