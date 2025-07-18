package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Map<String, Object> getLoan(@PathVariable String number) {

       // Map<String, Object> res = new HashMap<>();

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("number", "H00987987972342");
        res.put("type", "car");
        res.put("loan", 400000);
        res.put("emi", 3258);
        res.put("tenure", 18);

        return res;
    }
}
