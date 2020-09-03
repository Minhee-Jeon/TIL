# C++ code style formatter 검토 및 적용           

## clang-format 적용시키기
![workFlow](https://user-images.githubusercontent.com/58028527/91929565-a071cf80-ed19-11ea-8b65-3eb10d1e24a3.jpg)    
현재 팀 작업 프로세스는 이렇습니다. 프로세스 중 어떤 단계에서 지정된 코드 컨벤션을 적용시키면 될까요?   
local(:tangerine:)과 remote(:lemon:) 두 환경에 따라 적용시킬 방법은 이렇게 나뉩니다.      
       
* :tangerine:01_ **integrating clang-format into editor**   
코드 편집기의 plugin으로 clang-format을 들여놓습니다. clang-format은 개발자가 코딩을 할 때 코드 컨벤션을 자동으로 적용시킵니다. 
Visual Studio에서 코딩을 하다 보면 자동으로 중괄호 단위로 들여쓰기를 해 주죠? Visual Studio에서 기본으로 그렇게 설정이 되어 있는 것입니다.
clang-format을 사용해서 사용자가 지정한 대로 자동 완성 서식을 변경할 수가 있습니다.   
이 방법을 사용하게 된다면 프로젝트의 모든 개발자들이 사용하는 코드 편집기에 clang-format plugin을 설치해야 합니다. 코드를 입력하는 과정에서 자동으로 기준에 맞게 정렬해주기 때문에, 인위적으로 정렬내용을 바꾸지 않는다면 물 흐르듯 자연스럽게 코드컨벤션이 적용될 겁니다.    
* :tangerine:02_ **pre-commit-hook**    
local에서 ```git commit``` 명령어를 사용 시 commit 바로 전에 특정한 작동이 이뤄지도록 git에서는 ```hook``` 기능을 지원합니다.    
commit 시 자동으로 코드 컨벤션을 적용시켜주기 때문에 개발자가 신경쓰지 않아도 되겠죠? 하지만 프로젝트의 모든 개발자가 hook을 설치하지 않았다면 코드스타일이 통일되지 않을 겁니다. 또, 원하는 스타일이 적용되지 않은 기존 코드에서 코드 변경 시 사용하게 되면 코드 변경 사항이 clang-format의 형식 변경 사항과 혼합됩니다. 
      
* :lemon: **Jenkins' alert**   
이 방법은 개발자가 mr한 내용이 코드 컨벤션 양식을 지키지 않았다면 merge를 fail시키고 알림을 보냅니다. 
개발자가 mr에서 merge 승인을 받기 위해서라도 commit 전 코드 컨벤션 적용을 위해 git에서 명령어를 한번씩 더 쳐야하겠죠? fail당했다면 git log도 지저분해지겠네요.       
이 방법보다는 위 두 방법을 실현시키는 게 더 좋을 듯합니다. 조금이라도 작업을 자동화할 수 있고, git graph가 더 깔끔할 테니까요.     
   
   
## :tangerine:01_integrating clang-format into editor   
    
[ref_VS plugin](https://devblogs.microsoft.com/cppblog/clangformat-support-in-visual-studio-2017-15-7-preview-1/)       
[ref_vim-clang-format plugin](https://github.com/rhysd/vim-clang-format)    
    
## :tangerine:02_pre-commit-hook   
먼저 [clang-format](http://clang.llvm.org/docs/ClangFormat.html) 이 설치되어 있는지 확인하세요. **Linux**에서는 일반 ```clang``` 패키지에 포함된 것으로 설치하세요. Homebrew clang-format이 있는 MacOSX의 경우 ```brew install clang-format```을 통해 ```clang-format```을 설치하시면 됩니다.    
    
이제 프로젝트 repository의 ```.git/hooks``` 아래 ```.git/hooks/pre-commit```을 설치하면 됩니다. 
예를 들면 ```cp githook-clang-format/clang-format.hook myrepo/.git/hooks/pre-commit``` 이렇게요.
    
githook-clang-format
```
#!/bin/bash

STYLE=$(git config --get hooks.clangformat.style)
if [ -n "${STYLE}" ] ; then
  STYLEARG="-style=${STYLE}"
else
  STYLEARG=""
fi

format_file() {
  file="${1}"
  if [ -f $file ]; then
    clang-format -i ${STYLEARG} ${1}
    git add ${1}
  fi
}

case "${1}" in
  --about )
    echo "Runs clang-format on source files"
    ;;
  * )
    for file in `git diff-index --cached --name-only HEAD | grep -iE '\.(cpp|cc|h|hpp)$' ` ; do
      format_file "${file}"
    done
    ;;
esac
```
pre-commit hook이 설치가 되면 개발자가 commit할 때마다 add한 각 파일에 ```clang-format```이 적용됩니다.   

```clang-format```은 기본으로 LLVM 스타일을 쓰도록 설정되어 있어요. 이를 변경하려면 팀에서 다같이 사용할 코드 스타일을 정해 ```.clang-format``` 파일을 커스텀해서 사용하면 됩니다. 

원하는 스타일의 ```.clang-format``` 파일을 만들기 (여기서는 llvm)     
```clang-format -style=llvm -dump-config > .clang-format``` 

```git config``` 메서드를 쓰려면 repository 안에서 다음을 수행하세요.    
```git config hooks.clangformat.style llvm````           
[ref_01](https://gist.github.com/alexeagle/c8ed91b14a407342d9a8e112b5ac7dab), [ref_02](https://github.com/andrewseidl/githook-clang-format)    
      
      
      
## :lemon:Jenkins' alert

 
      
