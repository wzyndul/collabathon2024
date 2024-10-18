package com.stc.collabothon.services;

import com.stc.collabothon.model.offer.EligibilityCriteria;
import com.stc.collabothon.model.offer.Offer;
import com.stc.collabothon.repo.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfferService {
    private OfferRepository offerRepository;

    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    public Optional<Offer> getOfferById(Long id) {
        return offerRepository.findById(id);
    }

    public Offer saveOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public void deleteOfferById(Long id) {
        offerRepository.deleteById(id);
    }

    public List<Offer> getOffersByEligibility(EligibilityCriteria criteria) {
        return offerRepository.findAll()
                .stream()
                .filter(offer -> offer.getEligibilityCriteria().equals(criteria))
                .toList();
    }
}
