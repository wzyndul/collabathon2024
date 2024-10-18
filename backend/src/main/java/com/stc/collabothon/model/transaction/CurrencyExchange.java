package com.stc.collabothon.model.transaction;

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
public class CurrencyExchange extends BankTransaction{
    @Enumerated(EnumType.STRING)
    private Currency targetCurrency;
    private double exchangeRate;
    private int originalAmount;
    private int exchangedAmount;
}
