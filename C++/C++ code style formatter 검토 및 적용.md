# C++ code style formatter 검토 및 적용           

## clang-format 적용시키기
![workFlow](https://user-images.githubusercontent.com/58028527/91929565-a071cf80-ed19-11ea-8b65-3eb10d1e24a3.jpg)    
현재 작업 프로세스는 이렇습니다. 프로세스 중 어떤 단계에서 지정된 코드 컨벤션을 적용시키면 될까요?   
local과 remote 두 환경에 따라 적용시킬 방법은 이렇게 나눠집니다.      
* :tangerine: **pre-commit-hook**   
local에서 ''' git commit ''' 명령어를 사용 시 commit 바로 전에 특정한 작동이 이뤄지도록 git에서는 ''' hook ''' 기능을 지원합니다.    
자동으로 코드 컨벤션을 적용시켜주기 때문에 개발자가 신경쓰지 않아도 되겠죠? 여기에서 pre-commit-hook을 실현할 방법이 두 가지로 나뉘어집니다.   
   - :tangerine:01_코드 편집기의 plugin으로 clang-format을 적용시키기        
   - :tangerine:02_프로젝트 repository에서 작업   
      
* :lemon: **Jenkins' alert**   
이 방법은 개발자가 mr한 내용이 코드 컨벤션 양식을 지키지 않았다면 merge를 fail시키고 "네가 코드 스타일을 안 지켰으니까 돌아가. merge는 없다"하고 알림을 보냅니다.    
개발자가 mr에서 merge 승인을 받기 위해서라도 commit 전 코드 컨벤션 적용을 위해 git에서 명령어를 한번씩 더 쳐야하겠죠?    
이 방법보다는 위 두 방법을 실현시키는 게 더 좋을 듯합니다. 조금이라도 작업을 자동화할 수 있고, git graph가 더 깔끔할 테니까요.     

## reference    
[clang-format](http://clang.llvm.org/docs/ClangFormat.html)    
[참고(githook-clang-format1)](https://gist.github.com/alexeagle/c8ed91b14a407342d9a8e112b5ac7dab)    
[참고(githook-clang-format2)](https://github.com/andrewseidl/githook-clang-format)    
[VS plugin](https://devblogs.microsoft.com/cppblog/clangformat-support-in-visual-studio-2017-15-7-preview-1/)       
[vim-clang-format plugin](https://github.com/rhysd/vim-clang-format)       
