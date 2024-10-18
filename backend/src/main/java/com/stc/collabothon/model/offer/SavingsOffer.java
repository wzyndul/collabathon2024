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
public class SavingsOffer extends Offer {
    private double interestRate;
    private double minimumBalance;


    public SavingsOffer(String title, String description, EligibilityCriteria criteria,
                        double interestRate, double minimumBalance) {
        super(title, description, criteria, OfferType.SAVINGS);
        this.interestRate = interestRate;
        this.minimumBalance = minimumBalance;
    }
}
