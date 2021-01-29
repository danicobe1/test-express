pipeline{
    
    agent {label 'ubuntu20'}
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

        stage('second Stage'){
            steps{
                echo 'Hello second Stage...'
            }
            post {
                always {
                    sh 'yarn'
                }
            }
        }
    }
    
}
