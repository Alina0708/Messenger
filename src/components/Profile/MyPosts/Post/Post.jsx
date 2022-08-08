import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
    <div className={classes.profilePosts}>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGRgaGhocGBoaGhoaGhoYGh4aGhoaGhwcIS4lHB4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMDw8QGBIRGDEhGB0xNDExNDExNDE0NDE0NDQxMTQxMTExNDExNDE0NDExMTQxMTE0NDExMTQxMTExND8xMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADoQAAEDAgQEAwcDAwIHAAAAAAEAAhEDIQQSMUEFUWFxE4GRBiIyobHB8FLR4RRC8WJyByMzgqKywv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAeEQEBAAICAwEBAAAAAAAAAAAAAQIRITESQVFhIv/aAAwDAQACEQMRAD8A5tPCeEoURFDnUokhDOFz3KoupaKZUKOishBFM5OQolBBqZ+3dO1Rft3QSSTJKhJJFIIEkkmUEpTFNKdAkkkkCSKdjSTABJ5C5T1WOaYcCDyKCJKUpoTIHSKUpIEkmSCoUJJ5SQFhOqhiG804rN5rImUG43PdFGo3mEI7U91QRQFlbCqw+iuQQKgVYVWUFbVF+o7qTVF2yB0pSTKh0kyUoHlMnTSgeEkikFAijOG8OdVJj3WD4nnQdBzKnwnhbqztcrB8buXQdV0uQANYxuVjdOp/USgrwzGUrMAFruN3Hz2CE4oPFY6RLh8J3kbKys6N4+pVNN14VHNJSicfSyVHt6yOxv8AdDFAydIJIGTpJBBJJNCSCApp20r/AJ9dkcFMBQbmD4RSbTaagzEiw0PMabqGI4bhnaMLOoP2V+Jfdo5Nb9B/KlTbOyoyKvCXMEsOdtz/AKh5boErp/Ci4sh8Vgmv1GV36gNe6hpzpCi5E4rCPYYcJGxGh/nohzogpZuovOnf7FSYLlM9pgd/sqGSTJIEkpZDyTBh5IGTlXU8I9xADSdNua67g/AmNZLxLnC4O0gfNBxivwOFdUe1jdTvsBuT0Whi+CuFQtGlo7mfsF0HC+HMpNgfESMzjqTy7WUBFCg1jAxghot1cdyeqg+mDqR21CtqPG3qouZPbq4AKqErUzFocPJAtAB0hajqTP1X/wBMn7IbFUAbgnzESg5biT81V56/QAIUoniDYqvHX7CUMUQk0pyooHCSdJAoSSSQGhTCZOoNeu+Qxw3Y31Ayn5gonBuJQGG96kQdWO/8X/yD6o7h7SewVVpNb1lQcxXsZz+SdzeyAF1IEQQCORuFj4/g2rqRJ5sOo3t+oLoiDylSoUQ4yJBUHIcP4Y5z2SLZr8xH2K6rH8EZUExB2I5zP1W1hsC0XgSrXshByWH9mWCM5k/z+0Kw8EpNNmrerNVL2Sgxv6ZrRlyjl6pf0rRFh6fnJaL2bKDWhRSw7xuB/CNwz0H4adhIVRp+G03I3n6oHGUtSNgYHMkq5tYqQuD1RGSyjHvPP5oP4Vwc0nT9/wCFaaILszvTYfgVGKfbKwX59bzHNVVVSqJ1A6CfnCEr18xDZ8gga4qC7z2ER8v3TMZDHvNoa4jvED5oMPEvzPc7mSfmoJgU6IZIJFMEDp0k6BoSSSQGgqQKzfDP6ikKbv1/VQbvDKrQ/K7R4yzsCYgnzAW/hzlBaBBC4PI/9S7LheKNSmHn42+6/qf7X+Y16gosG0qrpi5KIhx5hBv94S2AURgC92p8iFVX06Jm+i0cNSA1HWVXTZsWkI2mIsfVEWtKYsUsqTjCIGfSsh300W+pdJ7JUVkVmRdDNZdaWKp27IajTQRAVdV0I0NQuIZoeqCxgVosFXSE2RDqcBEUuA1/JQz6gFhra+5PRXuVWWx6/kIrDxNRua++v5uVzuOxdTMWfCwEiBq6xIk/P0XV4rhuY5t+X5oFzvEMA8VC8g5Q0R3i5/OZQZQTpEQUgqh0gkEkDpSmTIFKSSSA3IOSXhjknBSlQRNMclo+zeLyViwiWvGUj5g90ASqqNXLUDuRCJHY4WpTe73HzaeS08M/YfnksrC0m064cPgqDM07BzgczfW8cndFsYfAS4wSOXRGx1OYBFx8wigLJMbHfnooOcVUSzc0niUNVrxckLExHtphmHKXzGuUZgPMKo3HtVrTIWPgfaHDVzlZVbmOjXS0k9M2vktaiwqUV4hlih6DYWkWyh3sgqAd4hAV3IvFVI/OazMZiQxjqj7BjS4+Q0+YRUcRxelhhmqvDempMcgufxP/ABGYXe7ScRsSQPldcViq1XF1pDXve4wxjQXGNYa0X0knzKBNjHJB6ZgPbKnUMFuQnnot6nVa/Qz2XmnBuHsxFKrHu1abC9saPa27m94Xp3shgGDCMdF3DNK1cdcsy73+LmssqMXQa5pBC1KzAFnVXAbrLTieJ8NyHML+UQspdzjaEjN62my5HHYfK8xcJECp0ycKhkikmQJJKEkBoKRKikoJFUsMPnqFbKfC0S+oGjUlUdzwuj4jGyJbY3C6NjQLIThGFyMDY2RrkimehcSS1pMT2RDkgiPK/aLidXE1fAphzQPiG8bk9FyNSh72VoLjMCLydLAar0vjWFGHx7HmzK7HsJ0Ae6Ik7XA9V56Xvw1bMwlj6bjBgGNQbHoSteP87Z8r5aAvYWkgyCCQdiCLEEbEFek/8PfaZ7yMNWdmMe48mXGP7HHfofLlPm76r3kl5LiSSXG5JcZJJ1MlbvAKRbTr1RP/AC6djuHlzchHYgHyUmO1t09udT3Q9dV8Ix3i4ZlTdzGk94uqcTWsooLEiSua9vKmXD5RbO9jT6z/APPzW6/FXWF7Z0zWw0NuWuBI3I2jtdB5/gsVUw7xVpOcx7c2Vw1GZpY6O4Jv1QuckBpMgTHO5k33uup4fwGvUYc1KS2wIcGk9psRdXYf2JxLzamRfVzmgf8AiSteM+pLfgD2We6n4lQCf+W9jRzfUGRrY7mewK9dwGH8LDUqW7WNB8gFj8A9k24fK57g97ZLWgQxp/V1dfUrexDpUyvUnoxndvsNVdZZ9QmUe8Ss6s2T0B8llpWaeaywOK4PXmF1NFonoszitHXWFBxb6UJxTtoj67ItCrybEKoEZTnZOaKLZTjZQcEA/hJIjySVDeGohqNFEa7JyxvOVAGGFdB7MYYF8kjTdv3WMP0ifJdD7Luh8X0RI7KhopvCek1WFiqh4VbpROWFB7UGbxfhzMTSNN+mocNWu2IXC8X9lK5+JniEWD2ES4DTOxxEHqCvSC1Ra1WZWJZK8hw/slXLoNJ4uP7QPmXQF1dT2VqOotpZm02SC5jfezAEGXuMZjYcgu2uk5kpcr0eM3thYCmKFFtMEw0RdU1sVIRnGaIaxzr2E942Xn1HH4mrm8NoyiRmJgEjWOenyUakt6dDiMQBJJQmHxWYwL3WNWwGKeDmLWAbgzOto9PRDcKrPoVw15zh5DGwL5yQAI9VOFuOU5selcLsI22WoKx2UWUGhojko1HNA1FtVWTvrc1TnlUvqgmyk2oBugsrOEIV4EJPqSp022uoqqmDyVOOpAjdGE+SoqTEoOSxrfesdOYKDAOpnyRnG3w/e/ofTQobCgG82RD+akGAi11Pwt7DqpBoA19EA/hp1ZA5pILmMA1/PJJpaHaaHyhbdeg1rxEbW/lR9wN96HdxogzGVRNgB+y0+BkeIDpfQ81nvYy+Ux5WRXByA9p3mEHeUgrYVVI2VhK0IOUB5KwgKp3RQO5iTKapD+auaRyQWugKvxAmJUD0VAfGuHCswsJI0MgwQRcELguNYGvg2B1EtcxnxBzbuG9wbHqvSrxdB4+mxzCHAEEEGeRUrUtnTgMfxAtY/KQHZMzR1hansRwBopMrvJe97c+ZxmM0H3eS5fF8Gy4tlMvcaJ2PxZdSydxYCV6hg8SwMDWiGiAPzkpI3nlMtaWVw2CC6OyHysk2mQJ3sFdVrtvaYtCrNXk1VyDvykSBEdJ9EJWe8Gwf5NP7IytXETkPpafssjH1rwWlp21+UKVVmHLnG8jvIWpSYAszAvdz+crVa8nWEgaoeypcwxN/kifDvcQoYl4DdlUcP7Q1Dmg+hAWRRxRaZAB57StXjcucTYj1WJBGoP0SJW3QxrHWkg8ip1WkxKwywxKJweKJIa4myaNtDKUlPx28vmkoNStinPBuBFvwrPcH6SI7qPjTaPJO98at7obNSeZ1CPw1chwgiN0Cy5yxB0joichbo1Fd/gqgc0HoiCOqwvZ3FZm5f8rdWhEqJCTnKJBPJBF6aVY1hT+DKgpbVEwpGoeypqtLdEM+sSQDYICatbmVk47EgBLFVuSDw/DnOl7zPIbBBzWPL3VA5oktn67eX3W9hsbljOCJ9AizgmjQK40ARBCKnQxeYe6Qbq2pXLeX2WWafhmW6X/Poh8VWeT8/sVAfX4nBg2Btm5Hkbfva90G+Z11vpmpnqW3j/c2R2VVGlO0giL6EfpP2O30Ow+DI0u3kdQfsfr8kEsLQFrZexlp7b/MrUp01QzDxobIhhIQTeYXPcYxQiGmCtjG4oNbf1hcpiZLidj5gpUZWJBIJ35j7jdAsJi/8HyW3Wo20/O6zvCLQbeR/Oy1EqikTMRKjUowcwkEK/DGHgoquyRmGm/P/CIB/q28vkkoeGEkHXNY0gOAk7RF+0pmvaYblNtiIMffsq2Vtr2taNlezIdz5/yo0qfTYSHWBFr89pH7KkMc0fFruftKliaTQbEnnYKt5ERHYX+yDa4VVc1wEd+q6am+VxuAqkPAB1I6x0C7BjbBAQ2FLIFQ16tD1RYAk4/yoydAm+g+ZUEXs56n5IKvhgjQ4apn3QZX9NzVj2wFfUQ7ygHqbKms+E9aeqpqtJ9Pv+ygprDMqKVGbI7D4Q6laFLCjVFCUsJAkIxjIV7GjzVdUckRAmFTXrABNWcdlnYiqdN/uihsZicxy7cx+XVNOkR2Pofz1RtPB/3ev5yRIwvMKDJx1D3DHL0/hZLmvDDN+V53353+y2+JNyt003mCOyysVJp2AncRr25bmP8AC3GcmBWeQRzv+DotRjszAfU81mG5AWthG+6Ry+i0zaFyDkPn+6Ssyu/SUkZaL6rjofmJTOzgGxPa6i5gmbzsdz1VLsUWOvpKw6iGCRO/JUVqpba07zY+SjXxAHvDf8uqXYydJPLmCjLc4CwuOeLfddzQdIC5XhLHNYARJOvdb+AfaFq46hKKe2EzXq/KqHsuo0mH26pF1lS4pEqC0uAUHVJVZMlM96BPeqhGqcqAFlAiBqq8klXMYYV3hoKabIAEK3NAhScFS9/LqqIvfBCHxNe3UJ6jyRZVCgSVAK6o51graGFvJF0czDAIltOEUO2lbSyprWEBEPKzMdWMHKiMfi1VxIDdzB38wsjGOIHW1xaLfPRGMeXvPLqNbO1HSyHx525XAnnex7XW5OGLeWaxuZ077j7j8/jRaIy2vBny080Jgme+I9I+oRePAaGOHJ3YabdyfRaZDeK3kfUJIL+o6FJRWq6oP7XC22npy7KmsczSNxsfsnrhw5TaRFgrjhQAbnmSduyw0zaU/C4e6dOnQq/CUyajG6gmTZQfTJOoOsEb9wjeE0y17c0ftt5KwddQf7oAC0MG+Cs6k8Adef3RGGqGV1vTEuq3mOUi1D0agO6uYVydUTSVTqaLCZzVACaZTeGjS1RIQCupqTKSvLE4aEFIESkeascoubZBS4WUDTCKyWCdrFAG2krW0oV0JyEFPhqDlJ74QtV5cYCKprPJNtFlcWflb7joIv8An5std5DQZO3L7Lmn1A6oSDmE21t+H/C1jNs26iDIyg6TyFt9jsNFmY74jMC/dv8AC2q4ES0aTyBHO412WKTfnE9wL6hdK5o4ZkOuO0/vun402A1oNy2Y5T+/2T02SQ6QPpa+iDLH1Hl8727DT6LN6WA/DKS2PAP4ElF2PNCbuHmOXVTDBoI8wrnsJtsOsFQNPOCJgiJsPqstqnNmZaO9vsq2i06bTy/hFFpFiPPfz6qmtRdlMGZteNN+6sjI/CYgOkn+2BHXn1RTa5J5/L5rmW+IwhwdtoRY91tsxTXMa5toHvN3B5fyuuNc63cNWjfvy9efRaNGsHLm8LUIMOvyHLmtKlWJMg+6N+ZMaDl0UuMrUy02WuVoQWHxIdblb90QCudblWkJi1MCnlRVZaokK+QkwIKQwp8qtIUN0EHp0io5oQRcYVZqJnu36KotUVVUdJjZTLA0awpxAWdj8cGiIk6AddVZEZ/HKhMNabyLjVvUjcKFJoyTuRe0gyAe7TbRPh6XvFzhBMGJmJDvh8hva6rxVQAH8G1iNtF1xmo55XYLEvNxpMnp5HyCDqRE7x2N1a6qXOjz5iLInDcM8RvvSOQ3HMTyUtJGDXqGMrBJdYRsOZ/N1o8LwZAJeNrCdOUroqPC2MbDWiw/i6T8NH581m1qYsnwf9I+X7JLQ8Lv+eSSm2tAKegTn4z+ckklBbU0Kg7Qfm6SS0yhUQND/qv/AO3/ANgkktRjJrVtD/tK08F8Df8AafokktI0MBoO/wBgtMJ0lzvbpim1OkkstGcptTJIE5VU06SCJUH6+SSSgHf+fNJiSSKjVXOY3/rs/wBw+6SS1Gb0Oxf9v/d/6rDr/G/v90kl19OaXBtu4W1RSSXOtwWFS5Mko2FSSSRH/9k=" />
      <div className={classes.postMessage}>{props.message}</div>
      </div>
      <div className={classes.like}>{props.likecount} &#10084;</div>
    </div>
  );
};

export default Post;
