package com.stc.collabothon.util;

import com.stc.collabothon.model.offer.*;
import com.stc.collabothon.model.offer.criteria.AgeCriteria;
import com.stc.collabothon.model.offer.criteria.CompanySizeCriteria;
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
        loanOffer3.setCompanySizeCriteria(CompanySizeCriteria.SMALL);
        LoanOffer loanOffer4 = new LoanOffer("Student Loan", "Loan for higher education", EligibilityCriteria.LOW_INCOME, 2.0, 15000, 84);
        loanOffer4.setAgeCriteria(AgeCriteria.STUDENT);
        LoanOffer loanOffer5 = new LoanOffer("Personal Loan", "Unsecured personal loan", EligibilityCriteria.LOW_INCOME, 7.5, 10000, 36);
        LoanOffer loanOffer6 = new LoanOffer("Vacation Loan", "Loan for holiday expenses", EligibilityCriteria.MIDDLE_INCOME, 4.5, 5000, 24);
        LoanOffer loanOffer7 = new LoanOffer("Home Renovation Loan", "Loan for home improvement projects", EligibilityCriteria.MIDDLE_INCOME, 4.5, 50000, 180);
        loanOffer7.setAgeCriteria(AgeCriteria.MIDDLE_AGED);
        LoanOffer loanOffer8 = new LoanOffer("Startup Business Loan", "Loan to help launch new businesses", EligibilityCriteria.HIGH_INCOME, 6.0, 200000, 120);
        loanOffer8.setCompanySizeCriteria(CompanySizeCriteria.SMALL);
        LoanOffer loanOffer9 = new LoanOffer("Luxury Car Loan", "Loan for luxury car purchases", EligibilityCriteria.ULTRA_HIGH_NET_WORTH, 3.0, 150000, 60);
        loanOffer9.setAgeCriteria(AgeCriteria.MIDDLE_AGED);
        offerRepository.save(loanOffer1);
        offerRepository.save(loanOffer2);
        offerRepository.save(loanOffer3);
        offerRepository.save(loanOffer4);
        offerRepository.save(loanOffer5);
        offerRepository.save(loanOffer6);
        offerRepository.save(loanOffer7);
        offerRepository.save(loanOffer8);
        offerRepository.save(loanOffer9);

        SavingsOffer savingOffer1 = new SavingsOffer("Basic Savings", "High interest rate savings account", EligibilityCriteria.MIDDLE_INCOME, 1.5, 500);
        SavingsOffer savingOffer2 = new SavingsOffer("Premium Savings", "Savings account with premium benefits", EligibilityCriteria.HIGH_INCOME, 2.0, 5000);
        SavingsOffer savingOffer3 = new SavingsOffer("Youth Savings", "Special savings account for young people", EligibilityCriteria.LOW_INCOME, 1.0, 100);
        SavingsOffer savingOffer4 = new SavingsOffer("Family Savings", "Savings account for families", EligibilityCriteria.UPPER_MIDDLE_INCOME, 1.8, 2000);
        SavingsOffer savingOffer5 = new SavingsOffer("Senior Savings", "Savings for retirees", EligibilityCriteria.MIDDLE_INCOME, 2.5, 1000);
        SavingsOffer savingOffer6 = new SavingsOffer("Vacation Savings", "Save for holidays", EligibilityCriteria.MIDDLE_INCOME, 1.2, 300);
        SavingsOffer savingOffer7 = new SavingsOffer("Children's Savings Account", "Savings account for children's future", EligibilityCriteria.MIDDLE_INCOME, 1.2, 100);
        savingOffer7.setAgeCriteria(AgeCriteria.YOUNG);
        SavingsOffer savingOffer8 = new SavingsOffer("Retirement Savings", "Special account for retirement planning", EligibilityCriteria.HIGH_INCOME, 2.5, 20000);
        savingOffer8.setAgeCriteria(AgeCriteria.PENSIONER);
        SavingsOffer savingOffer9 = new SavingsOffer("Corporate Savings Plan", "Savings plan for small businesses", EligibilityCriteria.UPPER_MIDDLE_INCOME, 1.8, 5000);
        savingOffer9.setCompanySizeCriteria(CompanySizeCriteria.MEDIUM);
        offerRepository.save(savingOffer1);
        offerRepository.save(savingOffer2);
        offerRepository.save(savingOffer3);
        offerRepository.save(savingOffer4);
        offerRepository.save(savingOffer5);
        offerRepository.save(savingOffer6);
        offerRepository.save(savingOffer7);
        offerRepository.save(savingOffer8);
        offerRepository.save(savingOffer9);


        InvestmentOffer investmentOffer1 = new InvestmentOffer("Tech Stocks Fund", "Invest in top tech companies", EligibilityCriteria.HIGH_INCOME, 8.0, InvestmentType.EQUITY, 10000, 1.5, 7, "Tech Fund");
        InvestmentOffer investmentOffer2 = new InvestmentOffer("Retirement Trust Fund", "Safe retirement investment", EligibilityCriteria.ULTRA_HIGH_NET_WORTH, 5.0, InvestmentType.TRUST_FUND, 50000, 0.8, 4, "Retirement Fund");
        InvestmentOffer investmentOffer3 = new InvestmentOffer("Green Energy Fund", "Investment in renewable energy", EligibilityCriteria.UPPER_MIDDLE_INCOME, 6.5, InvestmentType.EQUITY, 15000, 1.2, 6, "Green Energy Fund");
        InvestmentOffer investmentOffer4 = new InvestmentOffer("Healthcare Fund", "Invest in healthcare sector", EligibilityCriteria.HIGH_INCOME, 7.0, InvestmentType.EQUITY, 20000, 1.3, 5, "Healthcare Fund");
        InvestmentOffer investmentOffer5 = new InvestmentOffer("Real Estate Fund", "Investment in real estate properties", EligibilityCriteria.UPPER_MIDDLE_INCOME, 4.5, InvestmentType.REAL_ESTATE, 30000, 1.0, 10, "Real Estate Trust");
        InvestmentOffer investmentOffer6 = new InvestmentOffer("Bond Portfolio", "Safe government bond investments", EligibilityCriteria.HIGH_INCOME, 3.5, InvestmentType.BOND, 10000, 0.7, 3, "Bond Portfolio");
        InvestmentOffer investmentOffer7 = new InvestmentOffer("Luxury Real Estate Fund", "Exclusive investment in luxury real estate properties", EligibilityCriteria.ULTRA_HIGH_NET_WORTH, 5.5, InvestmentType.REAL_ESTATE, 1000000, 1.2, 8, "Luxury Properties Fund");
        InvestmentOffer investmentOffer8 = new InvestmentOffer("Private Equity Fund", "Invest in private equity for high-net-worth individuals", EligibilityCriteria.ULTRA_HIGH_NET_WORTH, 10.0, InvestmentType.EQUITY, 500000, 2.0, 12, "Private Equity Fund");
        InvestmentOffer investmentOffer9 = new InvestmentOffer("Global Index Fund", "Invest in a diversified global portfolio", EligibilityCriteria.HIGH_INCOME, 7.0, InvestmentType.EQUITY, 25000, 1.2, 5, "Global Fund");
        investmentOffer3.setAgeCriteria(AgeCriteria.OLD);
        InvestmentOffer investmentOffer10 = new InvestmentOffer("Real Estate Fund", "Invest in prime real estate projects", EligibilityCriteria.ULTRA_HIGH_NET_WORTH, 6.5, InvestmentType.REAL_ESTATE, 100000, 2.0, 10, "Real Estate Trust");
        investmentOffer4.setCompanySizeCriteria(CompanySizeCriteria.BIG);
        InvestmentOffer investmentOffer11 = new InvestmentOffer("Startup Investment Fund", "Invest in early-stage tech startups", EligibilityCriteria.HIGH_INCOME, 10.0, InvestmentType.EQUITY, 50000, 2.5, 3, "Startup Fund");
        investmentOffer5.setCompanySizeCriteria(CompanySizeCriteria.SMALL);
        InvestmentOffer investmentOffer12 = new InvestmentOffer("Pension Fund", "Safe investment for pensioners", EligibilityCriteria.MIDDLE_INCOME, 4.0, InvestmentType.TRUST_FUND, 30000, 0.8, 5, "Pension Fund");
        investmentOffer6.setAgeCriteria(AgeCriteria.PENSIONER);
        offerRepository.save(investmentOffer1);
        offerRepository.save(investmentOffer2);
        offerRepository.save(investmentOffer3);
        offerRepository.save(investmentOffer4);
        offerRepository.save(investmentOffer5);
        offerRepository.save(investmentOffer6);
        offerRepository.save(investmentOffer7);
        offerRepository.save(investmentOffer8);
        offerRepository.save(investmentOffer9);
        offerRepository.save(investmentOffer10);
        offerRepository.save(investmentOffer11);
        offerRepository.save(investmentOffer12);

    }
}
