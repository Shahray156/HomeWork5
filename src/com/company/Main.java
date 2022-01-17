package com.company;

import java.util.Arrays;
public class Main {

    public static void main(String[] args) {
        task1();
        task2();
        task3();
        task4();

        int[] arr = generateRandomArray();
    }

    public static int[] generateRandomArray() {
        java.util.Random random = new java.util.Random();
        int[] arr = new int[30];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = random.nextInt(100_000) + 100_000;
        }
        return arr;
    }

    public static void task1() {
        int[] arr = generateRandomArray();
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        System.out.println("Сумма трат за месяц составляет " + sum + "рублей");

    }

    public static void task2() {
        int[] arr = generateRandomArray();
        int min = arr[0];
        int max = arr[0];
        for (int g = 0; g < arr.length; g++) {
            if (arr[g] < min) {
                min = arr[g];
            }
            if (arr[g] > max) {
                max = arr[g];
            }
            System.out.println("Минимальная сумма траты за день: " + min + "рублей");
            System.out.println("Максимальная сумма траты за день: " + max + "рублей");
        }
    }

    public static void task3() {
        int[] arr = generateRandomArray();
        int sum = 0;
        for (int r = 0; r < arr.length; r++) {
            sum += r;
        }
        float average = sum / (float) arr.length;
        System.out.println("Средняя сумма трат за месяц: " + average + "рублей");

    }

    public static void task4() {
        char[] reverseFullName = {'n', 'a', 'v', 'I', ' ', 'v', 'o', 'n', 'a', 'v', 'I'};
        for (int k = reverseFullName.length - 1; k >= 0; k--) {
            System.out.println(reverseFullName[k]);
        }
    }

    public static void task5() {
        int[][] matrixA = {
                {1, 1, 1},
                {1, 1, 1},
                {1, 1, 1},
        };
        for (int i = 0; i < matrixA.length; i++) {
            for (int j = 0; j < matrixA[i].length; j++) {
                matrixA[i][j] = 1;

                for (int[] row : matrixA) {
                    for (int column : row) {
                        System.out.print(column + " ");
                    }
                    System.out.println();
                }
            }
        }
    }
}
    



