## 채용퀴즈
로마 숫자는 고대 로마에서 사용된 기수법입니다.   
기본적으로 다음 5가지를 조합하여 로마 숫자를 읽고 쓸 수 있습니다.   
I = 1   
II = 2   
III = 3   
V = 5   
X = 10   
   
4, 6, 7, 8, 9는 규칙을 이용하여 표시합니다.   
V 또는 X를 기준으로 왼쪽에 I가 오면 빼고 오른쪽에 I, II, III이 오면 더해서 표시합니다.   
   
위와 같은 규칙으로 1 ~ 10까지 표시하면 다음과 같습니다.   
   
로마 숫자 아라비아 숫자   
I 1   
II 2   
III 3   
IV 4   
V 5   
VI 6   
VII 7   
VIII 8   
IX 9   
X 10   
아래 주어진 조건을 만족하는 로마 숫자 계산기를 작성하여 보내 주세요.   
프로그래밍 언어의 제한은 없으며 자신있는 언어로 작성해 주세요.   

## 조건   
- 사칙연산이 가능한 계산기를 작성해 주세요.   
- 입력값과 결과값의 범위는 I ~ XXIX (1 ~ 39) 입니다.   
- 결과값이 0이하 이거나 39(XXXIX)보다 큰 경우 “범위를 벗어났습니다.”라고 표시해 주세요.   
- 작은 수에서 큰 수를 빼는 경우 “작은 수에서 큰수를 뺄 수 없습니다.”라고 표시해 주세요.   
- 작은 수를 큰 수로 나누는 경우 “작은 수를 큰 수로 나눌 수 없습니다.”라고 표시해 주세요.   
- 나누기(/)의 결과 값은 몫과 나머지로 표시해 주세요.   
- 입력은 파일이나 콘솔에서 받아도 되고 프로그램 내부에 하드코딩해도 됩니다.   

   
```java
import java.util.*;


class Main2 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("로마자, 부호, 로마자를 띄어쓰기하며 입력해주세요. (부호: +, -, *, /)");
		String[] inputArr = sc.nextLine().toUpperCase().split(" ");
		//System.out.println(Arrays.deepToString(inputArr));

		if(inputArr.length == 1 || inputArr.length == 2) 
			System.out.println("띄어쓰기 잊지 마세요^^"); 
		else {
			int num1 = romeToInt(inputArr[0]);
			int num2 = romeToInt(inputArr[2]);

			calculate(num1, num2, inputArr[1]);

		}



	}

	//입력된 로마자를 int로
	@SuppressWarnings("unlikely-arg-type")
	public static int romeToInt(String r) {
		//String[] rome = {"I", "V", "X", "L", "C", "D", "M"};
		//int[] arab = {1, 5, 10, 50, 100, 500, 1000};
		Map<String, Integer> refer = new HashMap<>();
		refer.put("I", 1);
		refer.put("V", 5);
		refer.put("X", 10);
		refer.put("L", 50);
		refer.put("C", 100);
		refer.put("D", 500);
		refer.put("M", 1000);
//		System.out.println(refer);
		int arab = 0;


		for(int i=0; i<r.length(); i++) {
//			char now = r.charAt(i);
//			char compare = r.charAt(i+1);      //StringIndexOutOfBoundsException
			if(i < r.length()-1 && refer.get(r.charAt(i)+"") < refer.get(r.charAt(i+1)+"")) {
				arab += refer.get(r.charAt(i+1)+"") - refer.get(r.charAt(i)+"");
				i++;
			}
			else arab += refer.get(r.charAt(i) + "");
		}
		return arab;
	}

	public static void calculate(int num1, int num2, String sign) {
		String result = "";
		switch(sign) {

		case "+": 
			result = num1 + num2 > 39 ? "범위를 벗어났습니다." : intToRome(num1 + num2);
			break;

		case "–": case "-": //–와 -는 다른 기호였다..
			if (num1 - num2 < 0) 
				result = "작은 수에서 큰 수를 뺄 수 없습니다.";
			else if (num1 - num2 == 0) 
				result = "범위를 벗어났습니다.";
			else  
				result = intToRome(num1 - num2);
			break;

		case "*":
			result = num1 * num2 > 39 ? "범위를 벗어났습니다." : intToRome(num1 * num2);
			break;

		case "/":
			result = num1 < num2? 
					"작은 수를 큰 수로 나눌 수 없습니다." 
					: "몫 " + intToRome(num1 / num2) + ", 나머지 " + intToRome(num1 % num2);
		}

		System.out.println(result);
	}

	//계산된 int를 로마자로 출력
	public static String intToRome(int n) {
		//System.out.println(n);
		String[] chart = {"index", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"};
		String arab = "";

		if (n >= 10) {
			for(int i=0; i < n/10; i++) {
				arab += "X";
			}
			if(n%10 != 0) arab += chart[ n%10 ];
		}
		else arab = chart[n];
		return arab;
	}
}

   ```
