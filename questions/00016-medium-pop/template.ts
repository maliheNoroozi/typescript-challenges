type Pop<T extends any[]> = T extends [...infer First, infer _] ? First : T
