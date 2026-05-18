export const askQuestion =
  async (question) => {

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    return {
      answer:
        `# AI Explanation

Overfitting happens when a machine learning model memorizes training data instead of learning general patterns.

## Example

\`\`\`python
model.fit(X_train, y_train)
\`\`\`

This reduces performance on unseen data.`,
      timestamp: "12:40",
    };
  };