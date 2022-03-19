def sumCombination(arr, index, n,timer):
    if (timer < 0):
        return
    if (timer == 0):
        print(arr[:index])
        return
    prev = arr[index - 1]
    for i in range(prev, n + 1):
        arr[index] = i
        sumCombination(arr, index + 1, n,timer - i)

n = int(input("n: "))
arr = [1] * n
sumCombination(arr, 0, n, n)