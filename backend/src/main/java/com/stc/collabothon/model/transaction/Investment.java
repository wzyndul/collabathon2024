package com.stc.collabothon.model.transaction;

import com.stc.collabothon.model.offer.InvestmentType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Investment extends BankTransaction{
    @Enumerated(EnumType.STRING)
    private InvestmentType investmentType;

    private double managementFee;
    private String stockName;
}
