package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{number}")
    public Map<String, Object> getAccount(@PathVariable String number) {

    //  Map<String, Object> res = new HashMap<>(); //Simple Hashmap didn't maintain order as dummy

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("number", "00987987973432");
        res.put("type", "savings");
        res.put("balance", 234343);
        return res;
    }
}
