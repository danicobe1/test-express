pipeline{
    
    agent {label 'ubuntu20'}
    
    stages {
                    
        stage('first Stage'){
            steps{
                echo 'Hello First Stage...'
                sh 'uname -a'
                sh 'id'
                 sh 'yarn'
            }           
        }

        stage('second Stage'){
            steps{
                echo 'Hello second Stage...'
            }
            post {
                always {
                    sh 'ls'
                }
            }
        }
    }
    
}
