function getBotResponse(input) {
    //rock paper scissors
    if (input == "How do I change my bank account number?") {
        return "Contact your Northwestern Mutual representative at 1-800-388-8123, 7 a.m. to 6 p.m. CT, Monday through Friday";
    } else if (input == "How do I change beneficiaries?") {
        return `For beneficiary changes on investment products, contact your financial representative or call Investment Client services at (866) 950-4644. 
        For beneficiary changes on an Income Annuity or Income Plan, contact your financial representative or call Annuity Client Services at (866) 269-2950.
        For beneficiary changes on an Universal Life product, contact your financial representative or call Universal Life Services at (866) 464-3800.`;
    } else if (input == "Can I get my 1099 on the website?") {
        return "Yes, you can get it online at https://www.1099online.com/";
    } else if (input == "I love Northwestern Mutual!") {
        return `I love Northwestern Mutual too!`
    }
}