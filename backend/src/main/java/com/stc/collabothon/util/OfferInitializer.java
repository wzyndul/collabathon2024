package com.stc.collabothon.util;

import com.stc.collabothon.model.offer.*;
import com.stc.collabothon.repo.OfferRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class OfferInitializer implements CommandLineRunner {

    @Autowired
    private OfferRepository offerRepository;

    @Override
    public void run(String... args) throws Exception {

        LoanOffer loanOffer1 = new LoanOffer("Home Loan", "Low-interest home loan", EligibilityCriteria.MIDDLE_INCOME, 3.5, 250000, 240);
        LoanOffer loanOffer2 = new LoanOffer("Car Loan", "Affordable car loan", EligibilityCriteria.LOW_INCOME, 4.0, 20000, 60);
        offerRepository.save(loanOffer1);
        offerRepository.save(loanOffer2);


        SavingsOffer savingOffer1 = new SavingsOffer("Basic Savings", "High interest rate savings account", EligibilityCriteria.MIDDLE_INCOME, 1.5, 500);
        SavingsOffer savingOffer2 = new SavingsOffer("Premium Savings", "Savings account with premium benefits", EligibilityCriteria.HIGH_INCOME, 2.0, 5000);
        offerRepository.save(savingOffer1);
        offerRepository.save(savingOffer2);


        InvestmentOffer investmentOffer1 = new InvestmentOffer("Tech Stocks Fund", "Invest in top tech companies", EligibilityCriteria.HIGH_INCOME, 8.0, InvestmentType.EQUITY, 10000, 1.5, 7, "Tech Fund");
        InvestmentOffer investmentOffer2 = new InvestmentOffer("Retirement Trust Fund", "Safe retirement investment", EligibilityCriteria.ULTRA_HIGH_NET_WORTH, 5.0, InvestmentType.TRUST_FUND, 50000, 0.8, 4, "Retirement Fund");
        offerRepository.save(investmentOffer1);
        offerRepository.save(investmentOffer2);


        offerRepository.save(new LoanOffer("Business Loan", "Loan for small businesses", EligibilityCriteria.UPPER_MIDDLE_INCOME, 5.5, 100000, 120));
        offerRepository.save(new LoanOffer("Student Loan", "Loan for higher education", EligibilityCriteria.LOW_INCOME, 2.0, 15000, 84));
        offerRepository.save(new SavingsOffer("Youth Savings", "Special savings account for young people", EligibilityCriteria.LOW_INCOME, 1.0, 100));
        offerRepository.save(new InvestmentOffer("Green Energy Fund", "Investment in renewable energy", EligibilityCriteria.UPPER_MIDDLE_INCOME, 6.5, InvestmentType.EQUITY, 15000, 1.2, 6, "Green Energy Fund"));
    }
}
