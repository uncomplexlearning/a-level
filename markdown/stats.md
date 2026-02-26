> Remember the distinction between $X$ and $\bar{X}$ when calculating/checking CIs and estimators!!
# The hypotheses
## $\chi^2$
- reject if $>$ CV
### Contingency table
- $H_0$: ...are independent 
- $H_1$: ...are not independent

### Goodness-of-fit
> Do not specify parameters unless explicitly requested in the question!
- $H_0$: data is consientent with/fits the (named) distribution/ratio
- $H_1$: data is not consientent with/does not fit the (named) distribution/ratio
- To retain:
    - Insufficient evidence that the (named) distribution is not a good fit/consistent/well modelled
- To reject:
    - Sufficient evidence that the (named) distribution is not a good fit/consistent/well modelled

## Signed
- use p-value from $B(n, 0.5)$
### Single sample
- $H_0$: $m = m_0$ 
- $H_1$: $m > m_0\ (or <, \neq)$, where $m$ is the population median of...
### Paired sample
- $H_0$: $m_d = 0$ 
- $H_1$: $m_d > 0\ (or <, \neq)$, where $m_d$ is the median difference between...

## Wilcoxon signed rank
- reject if $\leq$ CV
### Single sample
- $H_0$: $m = m_0$ 
- $H_1$: $m > m_0\ (or <, \neq)$, where $m$ is the population median of...
### Paired samples
- $H_0$: $m_d = 0$ 
- $H_1$: $m_d > 0\ (or <, \neq)$, where $m_d$ is the median difference between...

## Wilcoxon rank sum
- reject if $\leq$ CV
### Two sample
- $H_0$: $m_A = m_B$ 
- $H_1$: $m_A > m_B\ (or <, \neq)$, where $m_A$ and $m_B$ are the median...

## PMCC
- reject if $>$ CV
- $H_0$: $\rho = 0$ 
- $H_1$: $\rho > 0 \ (or <, \neq)$, where $\rho$ is the population pmcc
- (In)sufficient evidence of (positive/negative) correlation between...

## Spearman's
- reject if $>$ CV
- $H_0$: no association between population ranks of...
- $H_1$: (positive/negative) association between population ranks of...
- (In)sufficient evidence of (positive/negative) association between...

> Alternatively,
> - $H_0$: $\rho_s = 0$ 
> - $H_1$: $\rho_s > 0 \ (or <, \neq)$, where $\rho_s$ is the population Spearman's rank correlation coefficient

# The fun probability question at the end

## 2018
- Simplifying factorials! (pun intended)
- if $P(X=r) \leq P(X=r+1)$, try $P(X=r)$ or $P(X=r+1)$ for the greatest probability

## 2019
- Remember to use permutations (order matters) when calculating probability for a "sum of two Xes"

## 2020
- "xx number of failures until first success"? <br> $P(success) + P(fail)P(success) +  P(fail)^2P(success) + ...$? <br> It's a geometric series! 
- Again, permutations, not combinations.<br> There are 3 ways of arranging {2, 2, 5}, 3! ways of arranging {2, 3, 4}, but only 1 way of arranging {3, 3, 3}
- When you choose X at random until obtaining a specific value n times, the last time will always be when you obtain that value.<br>So the probability of choosing exactly k values of X is ${k-1 \choose n-1}(p)^{n-1}(1-p)^{(k-1)-(n-1)} \times p$

## 2021
- Again (again), permutations, not combinations.
- List every possible combination. Then, remember that there are ${n \choose r}$ ways of finding n slots within a set of n numbers

## 2022
- If there is a histogram which you need to calculate s.d. and mean from, use the area. Don't fall for tricks with class width.
- If the null hypothesis is given to be correct, the probability of a false rejection is the first probability to meet the significance level.
- Remember replacement/non-replacement

## 2023
- Remember the distinction between "If A then P(B)" (this is P(B given A)) and the intersect
- And at the end of the day it's just maths. 

## 2024
- If you are asked to use a normal approximation to a binomial distribution to find the critical region, just take the value, and plug the nearest integers into the original binomial.
