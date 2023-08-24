"use client";
import React, { useState } from "react";

import { Logo, FormGroup, Button } from "components/";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col min-h-screen min-w-screen justify-center items-center">
        <span className="text-gray-500 text-center text-base font-medium">
          Welcome to
          <Logo />
        </span>

        <div className="my-10 flex flex-col gap-8">
          <div className="flex flex-col justify-center items-center gap-8 last:mb-10">
            <FormGroup
              type="text"
              value={email}
              label="E-mail"
              placeholder="Seu e-mail de acesso"
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormGroup
              label="Senha"
              type="password"
              value={password}
              placeholder="informe sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            label="Fazer Login"
            handleOnClick={() => {}}
            disabled={email.length && password.length ? false : true}
          />
        </div>
      </div>
    </>
  );
}
