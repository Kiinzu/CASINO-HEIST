In the *Entry Point Contract*, the main problem there are we can get many tokens with sucha small deposit, the rest of the token is behind the decimal point, which make them actually nothing (zero). The best mitigation for the lab that you just solve is actually to add a *Scaling Vector* or we can use *higher internal precision*, here is the explanation along with other possible mitigation for this vulnerability. &nbsp;  
&nbsp;  

1. **Higher Precision Internal Representation**
    We can use a higher internal precision to represent the decimals in the contract, so like if we got *1367.5823* we can represent this number in the internal of the contract by scaling it with *1e5* for example, making the number that will be saved inside the contract to be *13675230*. But always remember to apply the division when calculating with the balance to prevent calculation error. &nbsp;  
    &nbsp;  
2. **Using *SafeMath* Libraries**
    Like always, when it comes to mathematic calculation, one of the best practice is to use *safeMath* libraries like *OpenZeppelin's SafeMath* to ensure not only no rounding issues, but also overflow & underflow.