pipeline{
    
    agent {label 'ubuntu20'}
    
    stages {
        withEnv(['/home/jenkins/.nvm/versions/node/v14.15.4/bin']) {
            stage('Prepare') {
                sh "npm install -g yarn"
                sh "yarn install"
            }
        }
        stage('first Stage'){
            steps{
                echo 'Hello First Stage...'
                sh 'uname -a'
                sh 'id'
            }
            post {
                always {
                    sh 'yarn'
                }
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
