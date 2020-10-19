namespace correction {
  export type KeyedTransform = Transform & {internalKey: number};

  export type RealizedInput = ProbabilityMass<KeyedTransform>[];  // NOT Distribution - they're masses from separate distributions.

  /**
   * Represents a node where dependencies take effect.  This usually arises due to variation in
   * keyboard rules' output lengths, as rules with longer outputs may require multiple backspaces 
   * to fully delete.
   */
  class DependencyTuple {
    baseDistribution: Distribution<KeyedTransform>;
    dependencyMapping: {[transformKey: number]: Distribution<KeyedTransform> | DependencyTuple};
  }

  /**
   * Designed to model potential variations for the probability of possible input sequences, 
   * especially after receiving backspaces.
   */
  export class EditableInputSequence {
    private coreSequence: (Distribution<KeyedTransform> | DependencyTuple)[] = [];
    private static keySeed: number = 1;

    /**
     * Adds keying indentifiers to each Transform on the distribution, mutating the originals accordingly.
     * @param inputDistribution 
     */
    static addKeys(transform: Transform);
    static addKeys(inputDistribution: Distribution<Transform>);
    static addKeys(input: Distribution<Transform> | Transform) {
      if(Array.isArray(input)) {
        let inputDistribution = input;

        inputDistribution.forEach(function(sourceMass) {
          let sample = sourceMass.sample as KeyedTransform;
          sample.internalKey = EditableInputSequence.keySeed++;
        })
      } else {
        let transform = input as KeyedTransform;
        transform.internalKey = EditableInputSequence.keySeed++;
      }
    }

    // addInput:  takes in a Distribution<Transform>, adds a 'key' to each sample.
    // Does not perform special backspace handling.
    addInputDistribution(inputDistribution: Distribution<KeyedTransform>) {
      this.coreSequence.push(inputDistribution);
    }

    // TODO:  the 'fun' part.
    addBackspace(backspace: KeyedTransform) {
      // TODO: Works its way through the coreSequence, merging the backspace transform as appropriate
      // to efficiently build distributions for the possible post-backspace input-sequence probabilities.
    }

    getDistributionAfterSequence(priorInput: RealizedInput): Distribution<KeyedTransform> {
      // TODO:  gets the next distribution necessary to 'realize' a possible input sequence,
      // given the prior sequence to that point.  This approach is necessary, as the distributions
      // may be dependent if backspaces were received at any point.
      return null;
    }
  }
}