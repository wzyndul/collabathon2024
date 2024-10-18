package com.stc.collabothon.algorithm;

import com.stc.collabothon.model.Account;
import com.stc.collabothon.model.offer.EligibilityCriteria;
import com.stc.collabothon.model.offer.Offer;
import com.stc.collabothon.services.OfferService;
import com.stc.collabothon.storage.FinancialStatusMembershipFunctionStorage;
import fuzzy4j.sets.FuzzyFunction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class OfferRecommendationsAlgorithm {

    private final FinancialStatusMembershipFunctionStorage financialStatusMembershipFunctionStorage;;

    private final int numberOfRecommendations;
    private final OfferService offerService;


    @Autowired
    public OfferRecommendationsAlgorithm(FinancialStatusMembershipFunctionStorage financialStatusMembershipFunctionStorage,
                                         @Value("${offer.recommendations.amount}") int numberOfRecommendations, @Lazy OfferService offerService) {
        this.financialStatusMembershipFunctionStorage = financialStatusMembershipFunctionStorage;
        this.numberOfRecommendations = numberOfRecommendations;
        this.offerService = offerService;
    }

    public List<Offer> getRecommendedOffersForAccount(Account account) {
        double accountBalance = account.getBalanceAmount();
        Map<EligibilityCriteria, Double> accountMembershipMap = new HashMap<>();
        Map<EligibilityCriteria, FuzzyFunction> eligibilityCriteriaMap = financialStatusMembershipFunctionStorage.getIndividualFinancialStatusMembershipFunction();
        for (Map.Entry<EligibilityCriteria, FuzzyFunction> entry : eligibilityCriteriaMap.entrySet()) {
            accountMembershipMap.put(entry.getKey(), entry.getValue().apply(accountBalance));
        }
        System.out.println(accountMembershipMap);
        return getOffersByMembershipMap(accountMembershipMap);
    }

    List<Offer> getOffersByMembershipMap(Map<EligibilityCriteria, Double> accountMembershipMap) {
        List<Offer> offers = new ArrayList<>();
        double sum = accountMembershipMap.values().stream().mapToDouble(Double::doubleValue).sum();
        for (Map.Entry<EligibilityCriteria, Double> entry : accountMembershipMap.entrySet()) {
            if (offers.size() == numberOfRecommendations) {
                break;
            }
            if (entry.getValue() == 0.0) {
                continue;
            }
            int numberOfOffersFromCriteria = (int) Math.round(numberOfRecommendations * entry.getValue() / sum);
            System.out.println("Fetching " + numberOfOffersFromCriteria + " offers from criteria: " + entry.getKey());
            List<Offer> criteriaOffers = new ArrayList<>(offerService.getOffersByEligibility(entry.getKey()));
            System.out.println("CRITERIA OFFERS SIZE: " + criteriaOffers.size());
            if (criteriaOffers.isEmpty()) {
                continue;
            }
            Collections.shuffle(criteriaOffers);
            for (int i = 0; i < numberOfOffersFromCriteria; i++) {
                offers.add(criteriaOffers.get(i));
            }

        }
        return offers;
    }

}
