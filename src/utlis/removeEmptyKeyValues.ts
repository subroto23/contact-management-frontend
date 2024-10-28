export const removeEmptyKeyValues = (
  obj: Record<string, any>
): Record<string, any> => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, value]) => value !== "" && value !== null)
      .map(([key, value]) =>
        typeof value === "object" && !Array.isArray(value)
          ? [key, removeEmptyKeyValues(value as Record<string, any>)]
          : [key, value]
      )
  );
};
