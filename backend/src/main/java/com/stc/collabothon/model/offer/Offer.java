package com.stc.collabothon.model.offer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "offer_id_seq")
    @SequenceGenerator(name = "offer_id_seq", sequenceName = "offer_id_SEQ", allocationSize = 1)
    private Long id;

    private String title;

    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "eligibility_criteria")
    private EligibilityCriteria eligibilityCriteria;

    public Offer(String title, String description, EligibilityCriteria eligibilityCriteria) {
        this.title = title;
        this.description = description;
        this.eligibilityCriteria = eligibilityCriteria;
    }
}
