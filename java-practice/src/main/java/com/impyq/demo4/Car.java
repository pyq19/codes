package com.impyq.demo4;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Car {
    private int maxSpeed;
    public String brand;
    private double price;
}
