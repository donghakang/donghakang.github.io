# 오늘 해본 것

- 블로그에서 navigate에 absolute 경로로 바꾸어서 실제 블로그 포스트 안에서도 카테고리를 골라볼 수 있도록 설정 해보았다.
    
    ```jsx
    import { navigate } from "@reach/router"
    
    ...
    navigate(`/blog?tag=${key}`)
    ...
    ```
    
- 솔직히 오늘은 블로그는 많이 못하고 .. Lerna와 Spring framework, 그리고 postgresql에 대해서 더 많이 찾아본것 같다...  그러므로 오늘 배운것에 더 많이 글을 써보겠다!

# 오늘 배운 것

### Lerna

<aside>
💡 lerna 란, 
다양한 레포지토리를 사용할 시, 불편하고 더러운 코드를 정리해주며. 또한, Babel, React, Angular, Ember, 등 다양한 다중 패키지 리포지토리를 한개의 리포지토리로 변환 해줄때 유용하게 쓰이는 도구 입니다.
즉, **git/ npm 을 사용하여 다중 패키지 리포지토리를 관리하는 작업을 최적화 해주는 도구 입니다.**

</aside>

- Lerna에 대한 모든 것
    
    @[https://github.com/ahmadawais/lerna-tutorial](https://github.com/ahmadawais/lerna-tutorial)
    
    ## Why Lerna?
    
    한 개의 Git 프로젝트에서 여러개의 git project를 사용해야 하는 경우가 있었을 것이다. 혹은 한개의 프로젝트안에 여러개의 리포지토리가 생성이 되는 경우도 있었을 것이다. 
    
    그럴때, git submodule을 사용 한 경험이 있을것이다. git submodule 또한 엄청나게 유용하게 쓰이지만, 같은 repository 에 한 개의 branch만 사용이 가능했었고, 그것을 트랙킹 하거나 약간의 불편함을 개선하기 위해 Mono-repo로 만들어버리는 작업을 실시하기 위해 Lerna를 사용하면 좋다.
    
    ```jsx
    proj
    ├── repo1
    │   ├── node_modules
    │   └── package.json
    ├── repo2
    │   ├── node_modules
    │   └── package.json
    ├── repo3
    │   ├── node_modules
    │   └── package.json
    ├── package.json
    └── lerna.json
    ```
    
    ## Getting Started
    
    ```bash
    npm install --global lerna
    
    lerna init
    ```
    
    아래와 같이 lerna를 설치 한 후에는 lerna.json 이라는 configuration 파일이 생성이 됩니다.
    
    lerna.conf 파일 안에는 아래와 같은 코드가 있다.
    
    ```jsx
    // lerna.json (not an initial code)
    {
      "version": "independent",
      "packages": ["extensions/*", "platform/*"],
      "npmClient": "yarn",
      "useWorkspaces": true,
      "command": {
        "publish": {
          "ignoreChanges": ["*.md", "*.yml", "*.spec.js", "*.test.js"],
          "message": "chore(release): publish"
        },
        "version": {
          "allowBranch": "master",
          "conventionalCommits": true,
          "createRelease": "github",
          "yes": true,
          "message": "chore(release): publish [skip ci]"
        }
      }
    }
    ```
    
    - *packages*: 다른 package.json 이 있는 상위 폴더
    - *npmClient*: 어떤 tool로 build 할 것인지 (후에 yarn workspace를 애용할 예정이니, 개인적으로 yarn이 좋다)
    - *useWorkspaces:* yarn workspace 도 같이 쓰기 위해 true 로 설정한다.
    
    ## lerna bootstrap
    
    각각의 package.json 에 있는 dependency에 npm install을 해서 설치를 해주는 작업이 바로 lerna bootstrap 이다.
    
    **`lerna bootstrap —hoist`**라는 옵션도 추가해 준다면 공통되는 모듈을 루트의 node_modules로 올려서 설치하고, 각각의 패키지가 다른 버전의 외부 디펜던시를 사용하면 제일 많이 사용되는 버전이 호이스팅이 되며 경고 또한 보여집니다. 이로 인해 저장 공간이 줄고, 종속성 설치시간이 감소되며, 동일한 pkg 버전을 사용할 수 있습니다.
    
    만약 설치가 잘못될 시, `**lerna clean`** 을 사용하여 package의 모든 node_modules 를 삭제할 수 있습니다.
    
    ## 그 외의 lerna 명령어
    
    - `lerna version` : 마지막 git commit 과 현재 패키지의 버전의 차이점을 보여줍니다.
    - `lerna publish`: 패키지를 레지스트리에 배포합니다
    - `lerna run`: 패키지 package.json안에 명시되어있는 스크립트를 실행합니다. (learn run dev)
    

### Spring boot — Jpa — Postgres

- Spring에 대하여
    
    ## Why Spring boot ?
    
    Spring Framework는 자바 기반의 Backend server framework 이고 _____
    
    Spring Boot는 Spring Framework의 더 업그레이드 (?) 된 버전 이며, 간단하게 [start.spring.io](http://start.spring.io) 에서 initialize 한뒤, run을 함으로서 바로 api를 실행 시킬 수 있는 강점이 있다. 또한, Spring Framework 보다 코드도 더 단순해 진다.
    
    ```bash
    backend/src/main/java/com/example/backend
    ├── BackendApplication.java
    └── student
        ├── Student.java
        ├── StudentConfig.java
        ├── StudentController.java
        ├── StudentRepository.java
        └── StudentService.java
    ```
    
    - `BackendApplication.java`: 가장 기본적인 java start 코드 이며, 이 코드를 실행시키면 코드가 시작된다.
    - `Student.java`: Entity 클래스
    - `StudentController.java`: Get, Post, Insert, Update 커맨드를 받는 컨트롤러 클래스 이다
    - `StudentService.java`: Business 로직을 가지고 있는 클래스 이다. 흔히 StudentServiceImpl 라는 다른 클래스로 나누기도 한다. [링크](https://www.tutorialspoint.com/spring_boot/spring_boot_service_components.htm)
    - `StudentRepository.java`: 나의 예시 같은경우 JpaRepository<T, ID> 를 이용하여 실제 데이터 베이스와 연결 시켜주는 클래스 이다.
    - `StudentConfig.java`: 본인 같은경우 commandLineRunner를 여기에다가 집어넣었는데, Spring의 다양한 설정을 코드상에서 할 수 있게 해준다. (Bean)
    
    ### 📝 Code
    
    - `Student.java`
        
        ```bash
        package com.example.backend.student;
        
        import java.time.LocalDate;
        import javax.persistence.*;
        
        // To connect with database
        @Entity
        @Table
        public class Student {
            // annotation to connect with database
            @Id
            @SequenceGenerator(
                name = "student_sequence",
                sequenceName = "student_sequence",
                allocationSize = 1
            )
            @GeneratedValue(
                strategy = GenerationType.SEQUENCE,
                generator = "student_sequence"
            )
        
            private Long id;
            private String name;
            private String email;
            private String text;
            private LocalDate date;
            // @Transient       --> no need to be the column in the database.
            //                      this will calculate the age for us.
            // private Integer age;
        
            // public Integer getAge() {
            //     return Period.between(this.dob, LocalDate.now()).getYears();
            // }
        
            public Student() {
            }
        
            public Student( String name, String email, String text, LocalDate date) {
        
                this.name = name;
                this.email = email;
                this.text = text;
                this.date = date;
            }
        
            public Student(Long id, String name, String email, String text, LocalDate date) {
                this.id = id;
                this.name = name;
                this.email = email;
                this.text = text;
                this.date = date;
            }
        
        		// getter setter goes here...
        
        }
        ```
        
    - `StudentController.java`
        
        ```jsx
        package com.example.backend.student;
        
        import java.time.LocalDate;
        import java.util.List;
        
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;
        
        @RestController
        @RequestMapping(path="api/v1/post")
        public class StudentController {
            
            private final StudentService studentService;
        
            @Autowired
            public StudentController(StudentService studentService) {
                this.studentService = studentService;
            }
        
        		// GET 
            @GetMapping 
            public List<Student> getAllStudents() {
                return studentService.getAllStudents();
            }
        }
        ```
        
    - `StudentService.java`
        
        ```jsx
        package com.example.backend.student;
        
        import java.util.List;
        
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;
        
        // @Component
        @Service
        public class StudentService {
        
        	private final StudentRepository studentRepository;
        
        	@Autowired
        	public StudentService(StudentRepository studentRepository) {
        		this.studentRepository = studentRepository;
        	}
        
            public List<Student> getAllStudents() {
        		return studentRepository.findAll();		// --> returns list for us.
        
        		// return List.of(new Student(1L, "Dongha Kang", "dkang0602@gmail.com", "# HELLO WORLD ", LocalDate.of(2021, 9, 30) ));
        	}
        }
        ```
        
    - `StudentRepository.java`
        
        ```jsx
        package com.example.backend.student;
        
        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.stereotype.Repository;
        
        // JpaRepository<T, ID>
        // interface is responsible for data access
        @Repository
        public interface StudentRepository extends JpaRepository<Student, Long>{
            // nothing goes here for now
        }
        ```
        
    - `StudentConfig.java`
        
        ```jsx
        package com.example.backend.student;
        
        import java.time.LocalDate;
        import java.util.List;
        
        import org.springframework.boot.CommandLineRunner;
        import org.springframework.context.annotation.Bean;
        import org.springframework.context.annotation.Configuration;
        
        @Configuration
        public class StudentConfig {
            
            @Bean
            CommandLineRunner commandLineRunner(StudentRepository studentRepository) {
                return args -> {
                   Student dongha = new Student(1L, "Dongha Kang", "dkang0602@gmail.com", "# HELLO WORLD ", LocalDate.of(2021, 9, 30) ); 
        
                   studentRepository.saveAll(List.of(dongha));
                };
            }
        }
        ```
        
    
    # 내일 할 것 ?
    
    - 📝 Postgresql 에 Markdown 파일이 들어가는지 혹은 긴 markdown text가 들어가는지 확인해볼것이다
    - 🎨 Postgresql에 이미지는 어떻게 넣는지, 아니 그냥 .md 파일 자체를 넣으면 좋을 것 같다.