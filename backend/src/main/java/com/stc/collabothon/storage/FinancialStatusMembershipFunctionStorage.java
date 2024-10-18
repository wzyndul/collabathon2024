package com.stc.collabothon.storage;

import com.stc.collabothon.model.offer.EligibilityCriteria;
import fuzzy4j.sets.FuzzyFunction;
import fuzzy4j.sets.TrapezoidalFunction;
import fuzzy4j.sets.TriangularFunction;
import jakarta.annotation.PostConstruct;
import lombok.Getter;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Getter
@Component
public class FinancialStatusMembershipFunctionStorage {


    private final Map<EligibilityCriteria, FuzzyFunction> individualFinancialStatusMembershipFunction = new HashMap<>();
    private final Map<EligibilityCriteria, FuzzyFunction> corporateFinancialStatusMembershipFunction = new HashMap<>();

    @PostConstruct
    public void init() {
        individualFinancialStatusMembershipFunction.put(EligibilityCriteria.LOW_INCOME, new TrapezoidalFunction(0,0,5000,10000));
        individualFinancialStatusMembershipFunction.put(EligibilityCriteria.MIDDLE_INCOME, new TrapezoidalFunction(9000,15000,25000,30000));
        individualFinancialStatusMembershipFunction.put(EligibilityCriteria.UPPER_MIDDLE_INCOME, new TriangularFunction(24000, 40000, 66000));
        individualFinancialStatusMembershipFunction.put(EligibilityCriteria.HIGH_INCOME, new TriangularFunction(50000, 100000, 150000));
        individualFinancialStatusMembershipFunction.put(EligibilityCriteria.ULTRA_HIGH_NET_WORTH, new TrapezoidalFunction(140000,500000,1000000,1000000));
        System.out.println("INIT FINISHED");
        System.out.println(individualFinancialStatusMembershipFunction);
    }



}
