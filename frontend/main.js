import './style.css'
import { setupCounter } from './counter.js'

document.querySelector("#app").innerHTML = `
  <main class="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
    <header class="bg-white">
        <nav class="flex justify-between items-center w-[92%] sm:h-24 h-32 mx-auto py-2">
            <div>
                <ion-icon class="text-6xl text-[#fbc2eb] hover:text-[#a6c1ee]" name="flower-outline"></ion-icon>
            </div>
            <div class="navLinks sm:static absolute bg-white sm:min-h-fit min-h-[40vh] left-0 top-[12%] w-full flex items-center place-content-center px-5">
                <ul class="flex sm:flex-row flex-col items-center sm:gap-[4vw] gap-8">
                    <li>
                        <a class="hover:text-gray-700" href="#">Home</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-700" href="#">Resources</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-700" href="#">Products</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-700" href="#">About Us</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center">
                <button class="bg-[#a6c1ee] mr-3 w-24 text-sm text-white px-5 py-1 rounded-full hover:bg-[#87acec]">Sign in</button>
                <ion-icon onclick="hideMenu(this)" class="text-3x1 cursor-pointer sm:hidden" name="menu"></ion-icon>
            </div>
        </nav>
    </header>
  </main>
`;

setupCounter(document.querySelector('#counter'))
