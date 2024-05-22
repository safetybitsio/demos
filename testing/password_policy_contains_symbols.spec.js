describe("IAM Password Policy contains symbols", function () {
  const check = (resource) => {
    if (
      resource.type == "aws_iam_account_password_policy" &&
      !resource.data.requireSymbols
    ) {
      return { resourceID: resource.id };
    }
  };

  context("when it is not forced to contains symbols", function () {
    it("returns a finding", function () {
      // TODO: Copy and paste from the UI

      // const resource = {
      //   data: {
      //     allowUsersToChangePassword: false,
      //     expirePasswords: false,
      //     hardExpiry: false,
      //     isDefaultPasswordPolicy: false,
      //     maxPasswordAge: 0,
      //     minimumPasswordLength: 8,
      //     passwordReusePrevention: 0,
      //     requireLowercaseCharacters: false,
      //     requireNumbers: false,
      //     requireSymbols: false,
      //     requireUppercaseCharacters: false,
      //   },
      //   id: "arn:aws:iam::710427457664:account-password-policy",
      //   name: "account-password-policy",
      //   type: "aws_iam_account_password_policy",
      //   url: "https://console.aws.amazon.com/iam/home#/account_settings",
      // };

      const result = check(resource);

      expect(result)
        .to.have.property("resourceID")
        .equal("arn:aws:iam::710427457664:account-password-policy");
    });
  });

  context("when is forced to contains symbols", function () {
    it("does not return anything", function () {
      const resource = {
        data: {
          allowUsersToChangePassword: false,
          expirePasswords: false,
          hardExpiry: false,
          isDefaultPasswordPolicy: false,
          maxPasswordAge: 0,
          minimumPasswordLength: 8,
          passwordReusePrevention: 0,
          requireLowercaseCharacters: false,
          requireNumbers: false,
          requireSymbols: true,
          requireUppercaseCharacters: false,
        },
        id: "arn:aws:iam::710427457664:account-password-policy",
        name: "account-password-policy",
        type: "aws_iam_account_password_policy",
        url: "https://console.aws.amazon.com/iam/home#/account_settings",
      };

      const result = check(resource);

      expect(result).to.not.exist;
    });
  });
});
