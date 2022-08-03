function getBotResponse(input) {
    if (input == `I received an "Urgent Notice" What does this mean?`) {
        return "We will send you an Urgent Notice if we don't receive a check from you within 10 days of the due date.";
    } else if (input == "How do I change beneficiaries?") {
        return "Would you like to change beneficiaries for your life insurance, annuties, retirement fund, or a combination of all three?";
    } else if (input == "What is the difference between an IRA and a Roth IRA?") {
        return `I believe this <a href="https://www.northwesternmutual.com/iras-and-retirement-plans/#:~:text=With%20a%20Roth%20IRA%2C%20contributions,advisor%20can%20help%20you%20navigate/">site</a> will help answer your question.`;
    } else if (input == "What is the best investment for me?") {
        return `Unfortunately I am unable to answer this question. Let me send you over to your FR!`;
    } else if (input == "Annuities") {
        return `I believe this <a href="https://www.northwesternmutual.com/faq/life-insurance-faq/#:~:text=To%20change%20the%20beneficiary%2C%20you,Monday%20through%20Friday.&text=Changes%20in%20your%20personal%20life,need%20to%20change%20the%20policyowner.">site</a> will help answer your question.`;
    } 
    else if (input == "I love Northwestern Mutual!") {
        return `I love Northwestern Mutual too!`
    }
}