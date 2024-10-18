package com.stc.collabothon.model.offer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class InvestmentOffer extends Offer {

    private double expectedReturnRate;

    @Enumerated(EnumType.STRING)
    private InvestmentType investmentType;

    private double minimumInvestmentAmount;
    private double managementFee;
    private int riskLevel;
    private String stockName;
}
