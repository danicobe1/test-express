pipeline{
    agent any

    stages {
        stage('first Stage'){
            steps{
                echo 'Hello First Stage...'
            }
            post {
                always {
                    sh 'npm install'
                }
            }
        }

        stage('publish'){
            steps{
                echo 'Hello second Stage...'
                sh 'npm publish'
            }            
        }
    }
    
}