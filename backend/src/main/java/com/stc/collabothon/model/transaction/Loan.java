package com.stc.collabothon.model.transaction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Loan extends BankTransaction{
    private double interestRate;
    private double loanAmount;
    private int loanDuration;
}
