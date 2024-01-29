type MyPick<T, K extends keyof T> = {
    [key in keyof T as key extends K ? key : never]: T[key]
}
