package com.stc.collabothon.util;

import com.stc.collabothon.model.offer.*;
import com.stc.collabothon.model.offer.criteria.EligibilityCriteria;
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
        LoanOffer loanOffer3 = new LoanOffer("Business Loan", "Loan for small businesses", EligibilityCriteria.UPPER_MIDDLE_INCOME, 5.5, 100000, 120);
        LoanOffer loanOffer4 = new LoanOffer("Student Loan", "Loan for higher education", EligibilityCriteria.LOW_INCOME, 2.0, 15000, 84);
        LoanOffer loanOffer5 = new LoanOffer("Personal Loan", "Unsecured personal loan", EligibilityCriteria.LOW_INCOME, 7.5, 10000, 36);
        LoanOffer loanOffer6 = new LoanOffer("Vacation Loan", "Loan for holiday expenses", EligibilityCriteria.MIDDLE_INCOME, 4.5, 5000, 24);
        offerRepository.save(loanOffer1);
        offerRepository.save(loanOffer2);
        offerRepository.save(loanOffer3);
        offerRepository.save(loanOffer4);
        offerRepository.save(loanOffer5);
        offerRepository.save(loanOffer6);

        SavingsOffer savingOffer1 = new SavingsOffer("Basic Savings", "High interest rate savings account", EligibilityCriteria.MIDDLE_INCOME, 1.5, 500);
        SavingsOffer savingOffer2 = new SavingsOffer("Premium Savings", "Savings account with premium benefits", EligibilityCriteria.HIGH_INCOME, 2.0, 5000);
        SavingsOffer savingOffer3 = new SavingsOffer("Youth Savings", "Special savings account for young people", EligibilityCriteria.LOW_INCOME, 1.0, 100);
        SavingsOffer savingOffer4 = new SavingsOffer("Family Savings", "Savings account for families", EligibilityCriteria.UPPER_MIDDLE_INCOME, 1.8, 2000);
        SavingsOffer savingOffer5 = new SavingsOffer("Senior Savings", "Savings for retirees", EligibilityCriteria.MIDDLE_INCOME, 2.5, 1000);
        SavingsOffer savingOffer6 = new SavingsOffer("Vacation Savings", "Save for holidays", EligibilityCriteria.MIDDLE_INCOME, 1.2, 300);
        offerRepository.save(savingOffer1);
        offerRepository.save(savingOffer2);
        offerRepository.save(savingOffer3);
        offerRepository.save(savingOffer4);
        offerRepository.save(savingOffer5);
        offerRepository.save(savingOffer6);


        InvestmentOffer investmentOffer1 = new InvestmentOffer("Tech Stocks Fund", "Invest in top tech companies", EligibilityCriteria.HIGH_INCOME, 8.0, InvestmentType.EQUITY, 10000, 1.5, 7, "Tech Fund");
        InvestmentOffer investmentOffer2 = new InvestmentOffer("Retirement Trust Fund", "Safe retirement investment", EligibilityCriteria.ULTRA_HIGH_NET_WORTH, 5.0, InvestmentType.TRUST_FUND, 50000, 0.8, 4, "Retirement Fund");
        InvestmentOffer investmentOffer3 = new InvestmentOffer("Green Energy Fund", "Investment in renewable energy", EligibilityCriteria.UPPER_MIDDLE_INCOME, 6.5, InvestmentType.EQUITY, 15000, 1.2, 6, "Green Energy Fund");
        InvestmentOffer investmentOffer4 = new InvestmentOffer("Healthcare Fund", "Invest in healthcare sector", EligibilityCriteria.HIGH_INCOME, 7.0, InvestmentType.EQUITY, 20000, 1.3, 5, "Healthcare Fund");
        InvestmentOffer investmentOffer5 = new InvestmentOffer("Real Estate Fund", "Investment in real estate properties", EligibilityCriteria.UPPER_MIDDLE_INCOME, 4.5, InvestmentType.REAL_ESTATE, 30000, 1.0, 10, "Real Estate Trust");
        InvestmentOffer investmentOffer6 = new InvestmentOffer("Bond Portfolio", "Safe government bond investments", EligibilityCriteria.HIGH_INCOME, 3.5, InvestmentType.BOND, 10000, 0.7, 3, "Bond Portfolio");
        InvestmentOffer investmentOffer7 = new InvestmentOffer("Luxury Real Estate Fund", "Exclusive investment in luxury real estate properties", EligibilityCriteria.ULTRA_HIGH_NET_WORTH, 5.5, InvestmentType.REAL_ESTATE, 1000000, 1.2, 8, "Luxury Properties Fund");
        InvestmentOffer investmentOffer8 = new InvestmentOffer("Private Equity Fund", "Invest in private equity for high-net-worth individuals", EligibilityCriteria.ULTRA_HIGH_NET_WORTH, 10.0, InvestmentType.EQUITY, 500000, 2.0, 12, "Private Equity Fund");
        offerRepository.save(investmentOffer1);
        offerRepository.save(investmentOffer2);
        offerRepository.save(investmentOffer3);
        offerRepository.save(investmentOffer4);
        offerRepository.save(investmentOffer5);
        offerRepository.save(investmentOffer6);
        offerRepository.save(investmentOffer7);
        offerRepository.save(investmentOffer8);

    }
}
