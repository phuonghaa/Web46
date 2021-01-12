let searchField = document.querySelector('.search-field')
let searchBtn = document.querySelector('.search-btn')
let resultWrapper = document.querySelector('.result-wrapper')


// Listen to the event of typing into the searchField
searchField.onkeyup = () =>{
    let inputValue = searchField.value;
    if (inputValue.trim() != 0){
        searchBtn.classList.add('active')
    } else{
        searchBtn.classList.remove('active')
    }
}

//Listen to the event of clicking the searchBtn
searchBtn.onclick= async () => {
    let inputValue = searchField.value;

    let res = await fetch(`https://api.github.com/users/${inputValue}`).catch()
    if (res.ok) {
        let data = await res.json()
        console.log(data);

        resultWrapper.innerHTML = `
        <div class="result-upper">
                <div class="result-upper-left">
                    <img src="${data.avatar_url}" alt="user-img" class="avatar">
                </div>
                <div class="result-upper-right">
                    <div class="username">${data.login}</div>
                    <div class="account-info">
                        <div class="repo-info">${data.public_repos} repos</div>
                        <div class="follower-info">${data.followers} followers</div>
                        <div class="following-info">${data.following} followings</div>
                    </div>
                    <div class="email-info">Email: ${data.email}</div>
                    <div class="company-info">Company: ${data.company}</div>
                </div>
            </div>
        `
    } else {
        resultWrapper.innerHTML = `
        <div class="error-wrapper">
            <div class="error-icon"><i class="fa fa-exclamation-triangle"></i></div>
            <div class="error-message">No users found!</div>
        </div>
        `
        console.log('error');
    }


}

