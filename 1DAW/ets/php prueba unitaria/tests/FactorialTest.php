<?php

use PHPUnit\Framework\TestCase;
use App\fuctions\factorial;

class FactorialTest extends PHPUnit\Framework\TestCase
{
    public function test_positive_integers()
    {
        $this->assertEquals(1, factorial(0));
        $this->assertEquals(1, factorial(1));
        $this->assertEquals(2, factorial(2));
        $this->assertEquals(6, factorial(3));
        $this->assertEquals(24, factorial(4));

    }

    public function test_negative_integers()
    {
        $this->assertEquals(-1, factorial(-1));
        $this->assertEquals(-1, factorial(-2));
    }

    public function test_decimal_numbers()
    {
        $this->assertEquals(-1, factorial(2.5));
        $this->assertEquals(-1, factorial(3.14));
    }
}
