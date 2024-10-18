package com.stc.collabothon.algorithm;

import com.stc.collabothon.model.Account;
import com.stc.collabothon.model.offer.EligibilityCriteria;
import com.stc.collabothon.model.offer.LoanOffer;
import com.stc.collabothon.model.offer.Offer;
import com.stc.collabothon.storage.FinancialStatusMembershipFunctionStorage;
import fuzzy4j.sets.FuzzyFunction;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class OfferRecommendationsAlgorithm {

    private final FinancialStatusMembershipFunctionStorage financialStatusMembershipFunctionStorage;;

    public OfferRecommendationsAlgorithm(FinancialStatusMembershipFunctionStorage financialStatusMembershipFunctionStorage) {
        this.financialStatusMembershipFunctionStorage = financialStatusMembershipFunctionStorage;
    }

    public List<Offer> getRecommendedOffersForAccount(Account account) {
        double accountBalance = account.getBalanceAmount();
        Map<EligibilityCriteria, Double> accountMembershipMap = new HashMap<>();
        Map<EligibilityCriteria, FuzzyFunction> eligibilityCriteriaMap = financialStatusMembershipFunctionStorage.getIndividualFinancialStatusMembershipFunction();
        for (Map.Entry<EligibilityCriteria, FuzzyFunction> entry : eligibilityCriteriaMap.entrySet()) {
            accountMembershipMap.put(entry.getKey(), entry.getValue().apply(accountBalance));
        }
        System.out.println(accountMembershipMap);
        // todo change to actual offer calculation
        return List.of(new LoanOffer());
    }

}
